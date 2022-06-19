require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());

const db = require("./models");

const userRouter = require("./routes/user");
app.use("/auth", userRouter);
const linkRouter = require("./routes/link");
app.use("/link", linkRouter);
const accountRouter = require("./routes/account");
app.use("/account", accountRouter);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("This server is running on Port 3001 ");
  });
});
