const express = require('express')
const db = require('./config/connection')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(require('./routes'))

// sync sequelize models to the database, then turn on the server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  })
})

/* TASKS:
- import express and mongoose/ done
- create connections in config/ done?

- expand routes --
  = routes index
  = routes apis
*/