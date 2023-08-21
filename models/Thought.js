const { Schema, model, Types } = require('mongoose');
 // import moment module to format the timestamp 
const moment = require('moment')

// Defining the schema for a reaction
const reactionSchema = new Schema (
    {
       reactionId: {
        type: Schema.Types.ObjectId,
        // Generating a default ObjectId if not provided
        default: () => new Types.ObjectId(),
       },
       reactionBody: {
        type: String,
        required: true,
        maxlength: 280
       },
       username: {
        type: String,
        required: true,
       },
       createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),// Formatting createdAt date using moment.js
       },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        // Excluding 'id' field from the output
        id: false,
    }
)

// Schema to create a Thought Model
const thoughtSchema = new Schema (
    {
      thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),// Formatting createdAt date using moment.js
      },
      username: {
        type: String,
        required: true,
      },
      // Embedding reactionSchema within thoughtSchema
      reactions: [reactionSchema],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,// Excluding 'id' field from the output
    }
)

// get total count of friends
thoughtSchema.virtual('reactionCount')
.get(function() {
    return this.reactions.length;
})

// Creating a model based on the thoughtSchema
const Thought = model('Thought', thoughtSchema);

// Exporting the Thought model
module.exports = Thought;