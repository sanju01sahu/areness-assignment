const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");

app.use(express.json());
app.use(cors());

const mongoUrl = process.env.MONGODB_URL;

app.get("/", (req, res) => {
  res.send("API is working");
});
// use routes
app.use("/user", authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
  try {
    mongoose.connect(mongoUrl, (err) => {
      if (err) throw err;
      console.log("Mongodb connected...");
    });
  } catch (error) {
    console.log("Error @line31 ", error);
  }
});
