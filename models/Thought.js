const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
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
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  },
  thoughtSchema.virtual('ReactionCount').get(function() {
    return this.reactions.length;
  })
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
