const express = require("express");
const router = express.Router();
const { link } = require("../models");
const { validateToken } = require("../middleWares/AuthMiddleware");
const { uploadFile } = require("../middleWares/uploadFile");

router.get("/", async (req, res) => {
  let listOfLink = await link.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  res.json(listOfLink);
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let detailLink = await link.findOne({
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
        detailLink,
        image: "http://localhost:3001/uploads/" + detailLink.image,
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

router.post("/", uploadFile("image"), async (req, res) => {
  try {
    const data = {
      title: req.body.title,
      description: req.body.description,
      image: req.file.path,
    };
    let postLink = await link.create(data);

    res.send({
      status: "Success",
      data: {
        postLink,
        image: "http://localhost:3001/uploads/" + postLink.image,
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

    await link.destroy({
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
