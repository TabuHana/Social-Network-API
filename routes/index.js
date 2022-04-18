const express = require('express')
const router = express()

router.use('/api', require('./userRoutes.js'))
router.use('/api', require('./thoughtRoutes.js'))

router.use((req, res) => {
  return res.send('Incorrect Route')
})

module.exports = router