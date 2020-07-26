const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const db = require("./models");

const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//view routes
app.get("/", (req, res) => {
  res.send("/");
});

app.get("/api/workouts", (req, res) => {
//   res.json(res);
});

app.get("/api/workouts:id", (req, res) => {
//   res.json(res);
});

app.get("/api/workouts/range", (req, res) => {
//   res.json(res);
});
app.get("/stats", (req, res) => {
  res.send("/stats");
});
app.get("/exercise", (req, res) => {
  res.send("/exercise");
});

// post routes
app.post("/api/workouts", ({ body }, res) => {
  // const workout =
});
//update routes

//delete routes

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
  console.log(`http://localhost:${PORT}`);
});
