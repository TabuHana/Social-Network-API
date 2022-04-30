const { Schema, model } = require('mongoose')

//Reaction Schema sub document
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      //default value is set to new ObjectId
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  })

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
    },
    //array holding all reactions
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  })

const Thought = model('Thought', thoughtSchema)

//virtual property reactionCount gets the number of reactions on a thought
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length
})

const handleError = (err) => console.error(err)

module.exports = Thought

// ** User **:

// * `username`
//   * String
//   * Unique
//   * Required
//   * Trimmed

//   * `email`
//   * String
//   * Required
//   * Unique
//   * Must match a valid email address(look into Mongoose's matching validation)

//     * `thoughts`
//     * Array of`_id` values referencing the`Thought` model

//     * `friends`
//   * Array of`_id` values referencing the`User` model(self - reference)



// ** Schema Settings **:

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.

// ---

// ** Thought **:

// * `thoughtText`
//   * String
//   * Required
//   * Must be between 1 and 280 characters

//     * `createdAt`
//     * Date
//     * Set default value to the current timestamp
//       * Use a getter method to format the timestamp on query

//         * `username`(The user that created this thought)
//         * String
//         * Required

//         * `reactions`(These are like replies)
//         * Array of nested documents created with the`reactionSchema`