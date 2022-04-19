const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  thoughts: {
    type: Array,
    required: false,
    ref: 'Thought'
  },
  friends: {
    type: Array,
    required: false,
    ref: 'User'
  }
})

const User = model('User', userSchema)

module.exports = User
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

