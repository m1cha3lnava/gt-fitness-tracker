const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Please enter an exercise type.",
      },
      name: {
        type: String,
        required: "Please enter an exercise name.",
      },
      duration: {
        type: Number,
      },
      weight: {
        type: Number,
        required: "Please enter your weight as a number",
      },
      reps: {
        type: Number,
        required: "Please enter the number of reps for this exercise",
      },
      sets: {
        type: Number,
        required: "Please enter the number of sets for this exercise",
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
