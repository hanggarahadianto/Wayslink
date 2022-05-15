const express = require("express");
const router = express.Router();
const { account } = require("../models");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { uploadFile } = require("../middlewares/uploadFile");

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const detailAccount = await account.findAll({ where: { linkId: id } });
  res.json(detailAccount);
});

router.post("/", uploadFile("image"), async (req, res) => {
  try {
    // const data = {
    //   title: req.body.title,
    //   link: req.body.link,
    //   image: req.file.path,
    //   // linkId: id,
    // };

    const data = req.body;

    let postAccount = await account.create(data);
    res.send({
      status: "Success...",
      data: {
        postAccount,
        image: "http://localhost:3001/uploads/" + postAccount.image,
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

    await account.destroy({
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

module.exports = router;
