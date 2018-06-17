const axios = require('axios')
const Patient = require('../model/patient.js')
const weightTemplate = require('../../resource/weight.js')
const MeasurementEvent = require('../model/measurementevent.js')
const moment = require('moment')

function findFhirMedication(req, res) {
  const {
    fhirId,
  } = req.params

  // MedicationEvent.findById(medicationEventId).then(stuff => console.log('buuttt'))
  axios.get(`http://85.23.127.238:57773/csp/healthshare/fhirserver/fhir/Medication/${fhirId}`)
    .then(response => {
      if (response.data) {
        res.json(response.data)
      } else {
        res.json({
          error: `you done goofed your id, no findFhirMedication for id ${req.params.fhirId}`,
        })
      }
    })
}

function addFhirMeasurement(req, res) {
  const { value, consumed, id } = req.body
  console.log(`stuff ${value} ${consumed}`)
  MeasurementEvent.findOne({
    where: {
      id: id,
    },
  }).then(measurementEvent => {
    if (measurementEvent) {
      measurementEvent.measurementTaken = consumed
      measurementEvent.value = value
      measurementEvent.save().then(event => {
        weightTemplate.valueQuantity.value = value
        weightTemplate.effectiveDateTime = moment().toISOString()
        console.log(`new date is ${weightTemplate.effectiveDateTime}`)
        axios.post(`http://85.23.127.238:57773/csp/healthshare/fhirserver/fhir/Observation`, weightTemplate).then(response => {
          console.log(`added observation with value ${value}, response was ${response.statusCode}`)
        }).catch(console.error)
      })
      res.send('meas event done')
    } else {
      res.send('meas event fucked')
    }
  })
}

function getWeightMeasurementsFromFhir(req, res) {
  console.log(`getWeightMeasurementsFromFhir`)
  const {
    patientId,
  } = req.params

  Patient.findById(patientId).then(patient => {
    const fhirId = patient.fhirPatientId
    axios.get(`http://85.23.127.238:57773/csp/healthshare/fhirserver/fhir/Observation?subject=Patient/${fhirId}&code=29463-7`)
      .then(response => {
        if (response.data) {
          res.json(response.data)
        } else {
          res.json({
            error: `you done goofed your id, no patient for id ${patientId}`,
          })
        }
      })
  })
}
function findFhirPatient(req, res) {
  const {
    patientId,
  } = req.params

  Patient.findById(patientId).then(patient => {
    const fhirId = patient.fhirPatientId
    console.log(`http://85.23.127.238:57773/csp/healthshare/fhirserver/fhir/Patient/${fhirId}/$everything`)
    axios.get(`http://85.23.127.238:57773/csp/healthshare/fhirserver/fhir/Patient/${fhirId}/$everything`)
      .then(response => {
        if (response.data) {
          res.json(response.data)
        } else {
          res.json({
            error: `you done goofed your id, no findFhirMedication for id ${req.params.fhirId}`,
          })
        }
      })
  })
}

module.exports = {
  findFhirMedication,
  findFhirPatient,
  getWeightMeasurementsFromFhir,
  addFhirMeasurement,
}
