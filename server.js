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
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/api/workouts", (req, res) => {
  db.Workout.find({}).then((results) => {
    res.json(results); 
  });
});

app.get("/api/workouts/range", (req, res) => {
  db.Workout.find({}).then((results) => {
    res.json(results);
  });
});
app.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/stats.html"));
});
app.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/exercise.html"));
});

app.put("/api/workouts/:id", (req, res) => {
  db.Workout.update(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  ).then((results) => {
    res.json(results);
  });
});

// post routes
app.post("/api/workouts", ({ body }, res) => {
  db.Workout.create(body).then((results) => {
    res.json(results);
  });
});

// app.delete("/api/workout/:id");

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
  console.log(`http://localhost:${PORT}`);
});
