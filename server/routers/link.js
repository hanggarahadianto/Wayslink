const router = require("express").Router();
const { uploadFile } = require("../middleWares/uploadFile");
const { validateToken } = require("../middleWares/AuthMiddleware");

const {
  getAllLinks,
  detailLink,
  postLink,
  deleteLink,
} = require("../controllers/link");

router.get("/", getAllLinks);
router.get("/:id", detailLink);
router.post("/", uploadFile("image"), postLink);
router.delete("/:id", deleteLink);

module.exports = router;
