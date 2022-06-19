const router = require("express").Router();

const {
  getAllUsers,
  detailUser,
  registerUser,
  deleteUser,
} = require("../controllers/user");

router.get("/", getAllUsers);
router.get("/:id", detailUser);
router.post("/register", registerUser);
router.delete("/:id", deleteUser);

module.exports = router;
