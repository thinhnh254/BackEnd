const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");
const AccountModel = require("./models/account");

// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/register", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  AccountModel.findOne({
    username: username,
  })
    .then((data) => {
      if (data) {
        res.json("Account already exist!");
      } else {
        return AccountModel.create({
          username: username,
          password: password,
        });
      }
    })
    .then((data) => {
      res.json("Register success.");
    })
    .catch((err) => {
      res.status(500).json("Register fail!");
    });
});

app.post("/login", (req, res) => {
  var username = req.body.username;
  var password = req.body.password;

  AccountModel.findOne({
    username: username,
    password: password,
  })
    .then((data) => {
      if (data) {
        res.json("Login success.");
      } else {
        res.status(400).json("Wrong Account!");
      }
    })
    .catch((err) => {
      res.status(500).json("Login fail!");
    });
});

app.get("/", (req, res, next) => {
  res.json("Hello");
});

app.listen(port, () => {
  console.log(`Server start on port: ${port}`);
});
