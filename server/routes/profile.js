const express = require("express");
const router = express.Router();
const { profile } = require("../models");
const { validateToken } = require("../middleWares/AuthMiddleware");

router.get("/", async (req, res) => {
  let listOfProfile = await profile.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  res.json(listOfProfile);
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let detailProfile = await profile.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "Success...",
      data: {
        detailProfile,
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

router.post("/", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      email: req.body.email,
    };
    let createProfile = await profile.create(data);

    res.send({
      status: "Success",
      data: {
        createProfile,
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

router.delete("/:id", validateToken, async (req, res) => {
  try {
    const { id } = req.params;

    await post.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "Success",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
});

router.put("/title", validateToken, async (req, res) => {
  try {
    const { newTitle, id } = req.body;
    await link.update({ title: newTitle }, { where: { id: id } });
    res.json(newTitle);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
});

router.put("/description", validateToken, async (req, res) => {
  try {
    const { newDescription, id } = req.body;
    await link.update({ description: newDescription }, { where: { id: id } });
    res.json(newDescription);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
});

module.exports = router;
