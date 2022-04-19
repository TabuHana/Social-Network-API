const mongoose = require('mongoose')

const thoughtSchema = new mongoose.Schema({
  textBody: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 500
  },
  dateCreated: {
    type: Date,
    default: Date.now
  }
})

const Thought = model('Thought', thoughtSchema)

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