const { user } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { validateToken } = require("../middleWares/authMiddleware");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      let listOfUser = await user.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      res.status(200).json({
        message: "All the user",
        listOfUser,
      });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },

  detailUser: async (req, res) => {
    const { id } = req.params;
    try {
      const detailUser = await user.findOne({
        where: {
          id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.send({
        data: detailUser,
      });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },

  registerUser: async (req, res) => {
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
            message: "Email has already exist",
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
        message: "server error",
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;

      await user.destroy({
        where: {
          id,
        },
      });
      res.send({
        status: "Success",
      });
    } catch (error) {
      res.send({
        status: "failed",
        message: "server error",
      });
    }
  },
};
