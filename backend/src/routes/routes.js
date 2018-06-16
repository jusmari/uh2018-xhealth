const express = require('express')
const { findPatientById, findAllPatients } = require('../controller/patientcontroller.js')
const { findMedicationEventsByPatientId, findAllMedicationEvents, findMedicationEventById, updateMedication } = require('../controller/medicationeventcontroller.js')
const { findMeasurementEventsByPatientId, findAllMeasurementEvents, findMeasurementEventById } = require('../controller/measurementeventcontroller.js')
const { findFhirMedication } = require('../controller/fhircontroller.js')

const api = express()

const infos = function(req, res) {
  const json = {
    _links: {
      patients: {
        href: 'http://localhost:3000/api/patients',
      },
      condition: {
        href: 'http://localhost:3000/api/patients/:patientId/conditions',
      },
      measurementevents: {
        href: 'http://localhost:3000/api/patients/:patientId/measurementevents',
      },
      medicationevents: {
        href: 'http://localhost:3000/api/patients/:patientId/medicationevents',
      },
      medications: {
        href: 'http://localhost:3000/api/medications/:fhirId',
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
api.get('/measurementevents', findAllMeasurementEvents)

api.get('/medications/:fhirId', findFhirMedication)
api.get('/medicationevents', findAllMedicationEvents)
api.get('/medicationevents/:patientId', findMedicationEventsByPatientId)
api.post('/medicationevents', updateMedication)
// api.delete('/users/:userId', deleteUser)

module.exports = api
