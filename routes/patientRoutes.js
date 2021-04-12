const patientController = require('../controllers/patientController')

const express = require('express')
const patientRoutes = express.Router()

patientRoutes.post('/', patientController.create)
patientRoutes.post('/login',patientController.login)
patientRoutes.delete('/:id', patientController.delete)



module.exports = patientRoutes