const { Schema, model } = require('mongoose')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  })

const User = model('User', userSchema)

//virtual property friendCount to get number of friends
userSchema.virtual('friendCount').get(function () {
  return this.friends.length
})

const handleError = (err) => console.error(err)

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

