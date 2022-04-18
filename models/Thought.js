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