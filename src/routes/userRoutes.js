// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/login", userController.loginUser);

// Route for user registration
router.post("/register", userController.registerUser);

module.exports = router;
