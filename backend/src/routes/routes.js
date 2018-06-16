const express = require('express')
const { findPatientById, findAllPatients } = require('../controller/patientcontroller.js')
const { findMedicationEventsByPatientId, findAllMedicationEvents, findMedicationEventById } = require('../controller/medicationeventcontroller.js')
const { findMeasurementEventsByPatientId, findAllMeasurementEvents, findMeasurementEventById } = require('../controller/measurementeventcontroller.js')
const { findFhirMedication } = require('../controller/fhircontroller.js')

var api = express()

var infos = function(req, res) {
  var json = {
    _links: {
      users: {
        href: 'http://localhost:3000/api/users',
      },
    },
  }
  res.send(json)
}
api.get('/', infos)

api.get('/patients', findAllPatients)
api.get('/patients/:patientId', findPatientById)
api.get('/patients/:patientId/medicationevents', findMedicationEventsByPatientId)
api.get('/patients/:patientId/medicationevents/:medicationEventId', findMedicationEventById)

api.get('/patients/:patientId/measurementevents', findMeasurementEventsByPatientId)
api.get('/patients/:patientId/measurementevents/:measurementEventId', findMeasurementEventById)

api.get('/medications/:fhirId', findFhirMedication)
api.get('/medicationevents', findAllMedicationEvents)
api.get('/medicationevents/:patientId', findMedicationEventsByPatientId)
// api.delete('/users/:userId', deleteUser)

module.exports = api
