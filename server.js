const express = require('express')
const app = express()

const rowdy = require ('rowdy-logger')
const routesReport = rowdy.begin(app)
const patientRoutes = require('./routes/patientRoutes')
const appointmentRoutes = require('./routes/appointmentRoutes')

app.use(express.json())
app.use(require('cors')())

const PORT = process.env.port || 3001
app.listen(PORT, () => {
    console.log(`port running on ${PORT}`)
  routesReport.print()
})

app.use('/patient',patientRoutes)
app.use('/appointment',appointmentRoutes)