require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const userRouter = require("./routers/user");
const linkRouter = require("./routers/link");

const app = express();
app.use(cors());
const port = process.env.PORT || 4004;

const db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/user", userRouter);
app.use("/link", linkRouter);

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});

module.exports = app;
