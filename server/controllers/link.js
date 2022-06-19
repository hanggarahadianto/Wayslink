const { link } = require("../models");

module.exports = {
  getAllLinks: async (req, res) => {
    try {
      let listOfLink = await link.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });

      res.status(200).json({
        listOfLink,
      });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },

  detailLink: async (req, res) => {
    const { id } = req.params;
    try {
      const detailLink = await link.findOne({
        where: {
          id,
        },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      res.send({
        data: detailLink,
      });
    } catch (error) {
      res.status(500).json({ message: "server error" });
    }
  },

  postLink: async (req, res) => {
    try {
      const data = {
        title: req.body.title,
        description: req.body.description,
        image: req.file.path,
      };

      let postLink = await link.create(data);

      res.send({
        data: {
          postLink,
          image: "http://localhost:4004/uploads/" + postLink.image,
        },
      });
    } catch (error) {
      res.status(500).send({
        status: "failed",
        message: "server error",
      });
    }
  },

  deleteLink: async (req, res) => {
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
      res.send({
        status: "failed",
        message: "server error",
      });
    }
  },
};
