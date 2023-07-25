// controllers/userController.js
const User = require("../models/User");

let loginUser = async (req, res) => {
  const { username, password } = req.body;

  User.findOne({
    username: username,
    password: password,
  })
    .then((data) => {
      if (data) {
        res.json("Login Success!");
      } else {
        res.status(400).json("Wrong account!");
      }
    })
    .catch((err) => {
      res.status(500).json("Have wrong with server!");
    });
};

let registerUser = async (req, res) => {
  const { username, password } = req.body;

  User.findOne({
    username: username,
  })
    .then((data) => {
      if (data) {
        res.json("User already exist!");
      } else {
        return User.create({
          username: username,
          password: password,
        });
      }
    })
    .then((data) => {
      res.json("Create success");
    })
    .catch((err) => {
      res.status(500).json("Create fail!");
    });
};

module.exports = {
  registerUser: registerUser,
  loginUser: loginUser,
};
