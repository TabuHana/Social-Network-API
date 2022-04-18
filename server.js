const express = require('express')
const db = require('./config/connection.js')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

// sync sequelize models to the database, then turn on the server
db.sync()
app.listen(process.env.PORT || 3000)

/* TASKS:
- import express and mongoose
- create connections in config
*/