const router = require('express').Router()
const { User } = require('../models')

//GET ALL USERS
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}).populate('thoughts').populate('friends')
    res.json(users)
  } catch (err) {
    res.status(500).json({ err })
  }
})

//GET A USER BY ID
router.get('/users/:id', async ({ params: { id } }, res) => {
  try {
    const user = await User.findById(id).populate('thoughts').populate('friends')
    res.json(user)
  } catch (error) {
    res.status(500).json({ error })
  }
})

//CREATE NEW USER
router.post('/users', async ({ body }, res) => {
  try {
    const user = await User.create(body)
    res.json(user)
  } catch (error) {
    res.status(500).json({ error })
  }
})

//UPDATE A USER BY ID
router.put('/users/:id', async ({ body, params: { id } }, res) => {
  try {
    const user = await User.findByIdAndUpdate(id, body)
    res.json('User info updated')
  } catch (error) {
    res.status(500).json({ error })
  }
})

//FRIENDS
//ADD NEW FRIEND TO USER'S FRIEND LIST
router.post('/users/:id/friends/:friendId', async ({ params: { id, friendId } }, res) => {
  try {
    await User.findByIdAndUpdate(
      { _id: id, },
      { $push: { friends: friendId } },
      { new: true }
    )
    res.json('Friend successfully added')
  } catch (error) {
    res.status(500).json({ err })
  }
})

//REMOVE FRIEND FROM USER'S FRIEND LIST
router.delete('/users/:id/friends/:friendId', async ({ params: { id, friendId } }, res) => {
  try {
    await User.findByIdAndUpdate(
      { _id: id, },
      { $pull: { friends: friendId } },
      { new: true }
    )
    res.json('Friend successfully deleted')
  } catch (error) {
    res.status(500).json({ err })
  }
})


module.exports = router


// ** `/api/users` **

// * `GET` all users

//   * `GET` a single user by its `_id` and populated thought and friend data

//     * `POST` a new user:

// ```json
// // example data
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }
// ```

//   * `PUT` to update a user by its`_id`

//     * `DELETE` to remove user by its`_id`

//       ** BONUS **: Remove a user's associated thoughts when deleted.

// ---

// ** `/api/users/:userId/friends/:friendId` **

// * `POST` to add a new friend to a user's friend list

//   * `DELETE` to remove a friend from a user's friend list

// ---