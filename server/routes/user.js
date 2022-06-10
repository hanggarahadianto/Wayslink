const express = require("express");
const router = express.Router();
const { user } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { validateToken } = require("../middleWares/authMiddleware");
const { registerSchema, loginSchema } = require("../helpers/validationSchema");

router.post("/register", async (req, res) => {
  const { error } = registerSchema.validate(req.body);

  if (error)
    return res.status(400).send({
      error: {
        message: error.details[0].message,
      },
    });

  try {
    const userExist = await user.findOne({
      where: {
        email: req.body.email,
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    if (userExist)
      return res.send({
        error: {
          message: "Email has already registered",
        },
      });
    else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);

      const newUser = await user.create({
        email: req.body.email,
        password: hashedPassword,
        name: req.body.name,
      });

      const accessToken = jwt.sign({ id: newUser.id }, process.env.TOKEN_KEY);

      res.json({
        status: "Success",
        data: {
          id: newUser.id,
          name: newUser.name,
          token: accessToken,
        },
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginSchema.validate(req.body);
  if (error)
    return res.status(400).send({
      error: {
        message: error.details[0].message,
      },
    });

  try {
    const userExist = await user.findOne({
      where: {
        email: req.body.email,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (!userExist)
      return res.send({
        error: {
          message: "User doesn't exist",
        },
      });
    const isValid = await bcrypt.compare(req.body.password, userExist.password);
    if (!isValid) {
      return res.status(400).send({
        status: "failed",
        message: "Email or password doesn't match",
      });
    }

    const accessToken = jwt.sign(
      { id: userExist.id, email: userExist.email },
      process.env.TOKEN_KEY
    );
    res.json({
      status: "Success",
      data: {
        id: userExist.id,
        name: userExist.name,
        token: accessToken,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});
module.exports = router;
