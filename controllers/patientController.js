const models = require('../models')

const patientController = {}

patientController.create = async (req,res) => {
  try {
    const patient = await models.patient.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    res.json({ message: 'welcome', patient })
  } catch (error) {
    res.status(400)
    res.json({ error: 'email already taken'})
  }
}