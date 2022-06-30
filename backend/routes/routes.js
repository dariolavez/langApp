'use strict'

const express = require ('express')
const api = express.Router()

const palabraCtrl = require('../controllers/palabras')

api.post('/addword', palabraCtrl.addWord)
api.get('/getwords', palabraCtrl.getWords)






module.exports = api

