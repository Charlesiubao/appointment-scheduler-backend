const models = require('../models')

const patientController = {}

patientController.create = async (req,res) => {
  try {
    console.log('bout to make one')
    const newPatient = await models.patient.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    console.log('just made one')
    res.json({ message: 'welcome', newPatient })
  } catch (error) {
    res.status(400)
    res.json({ error: 'email already taken'})
    console.log('making one failed')
  }
}

patientController.login = async (req,res) => {
  const patient = await models.patient.findOne({
      where: {
          email: req.body.email
      }
  })
  if (patient && (patient.password === req.body.password)) {
      res.status(200)
      res.json({id: patient.id, name: patient.name})
  } else{
      // console.log({error})
      res.status(401)
      res.json({error: 'invalid credentials'})
  }
}

patientController.delete = async(req,res) => {
  try {
      let patient = await models.patient.findOne({
          where: {
              id: req.params.id
          }
      })
      await patient.destroy()
      console.log('patient deleted')
      res.json({ message: 'patient deleted'}) 
  } catch (error) {
      res.json({error})
      
  }
}


module.exports = patientController