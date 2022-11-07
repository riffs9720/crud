const express = require('express')
const routes = express.Router()

const Persons = require('../controllers/PersonsController.js')

routes.get('/persons', Persons.index)

module.exports = routes