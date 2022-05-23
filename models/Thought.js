const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: Text,
      required: true,
      max_length: 5000,
    },
    user: {
      type: String,
      required: true,
  
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

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
