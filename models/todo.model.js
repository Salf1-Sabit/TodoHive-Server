const mongoose = require("mongoose");

// USER SCHEMA
const todoSchema = mongoose.Schema({
  userEmail: {
    type: String,
    require: true,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
  },
  dueDateTime: {
    type: Date,
  },
  priority: {
    type: Number,
    default: 4,
  },
  progress: {
    type: Number,
    default: 0,
  },
  todoStatus: {
    type: Boolean,
    default: false,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
});

// USER MODEL
const Todos = mongoose.model("todos", todoSchema);

module.exports = Todos;
