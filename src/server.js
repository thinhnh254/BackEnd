const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Connect to MongoDB (replace YOUR_MONGODB_URI with your actual MongoDB URI)
mongoose
  .connect("mongodb://localhost:27017/database", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the 'public' folder
app.use(express.static("public"));

const userRoutes = require("./routes/userRoutes.js");

app.use("/users", userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
