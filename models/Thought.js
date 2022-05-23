const { Schema, model } = require('mongoose');
const assignmentSchema = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
      max_length: 50,
    },
    last: {
      type: String,
      required: true,
      max_length: 50,
    },
    github: {
      type: String,
      required: true,
      max_length: 50,
    },
    creationDate: {
      type: Date,
      default: Date.now(),
    },
    reaction: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Student = model('student', studentSchema);

module.exports = Student;
