'use strict'

const express = require ('express')
const app = express()
const api = require('./routes/routes')
const cors = require('cors')


app.use(express.urlencoded({ extended:false}))
app.use(express.json())



app.use(cors());

app.use('', api)

module.exports = app
