const MeasurementEvent = require('../model/measurementevent.js')
const Patient = require('../model/patient.js')

function findAllMeasurementEvents(req, res) {
  // eslint-disable-next-line eqeqeq, object-curly-newline
  MeasurementEvent.findAll().then(measurementevents => {
    if (measurementevents) {
      res.json(measurementevents)
    } else {
      res.json({
        error: 'no measurementevents :(',
      })
    }
  })
}

function findMeasurementEventById(req, res) {
  const {
    measurementEventId,
  } = req.params
  MeasurementEvent.findOne({
    where: {
      id: measurementEventId,
    },
  }).then(measurementEvent => {
    if (measurementEvent) {
      res.json(measurementEvent)
    } else {
      res.json({
        error: `you done goofed your id, no findMeasurementEventById for id ${measurementEventId}`,
      })
    }
  })
}
function findMeasurementEventsByPatientId(req, res) {
  const {
    patientId,
  } = req.params
  console.log(Patient)
  Patient.findById(patientId).then(patient => {
    console.log(patient)
    patient.getMeasurementEvent().then(measurementEvents => {
      if (measurementEvents) {
        res.json(measurementEvents)
      } else {
        res.json({
          error: `you done goofed your id, no findMeasurementEventsByPatientId for id ${req.params.measurementeventId}`,
        })
      }
    })
  })
}

function updateMeasurement(req, res) {
  const { consumed, id, value } = req.body
  console.log(`stuff ${id} ${consumed}`)
  MeasurementEvent.findOne({
    where: {
      id: id,
    },
  }).then(measurementEvent => {
    if (measurementEvent) {
      measurementEvent.measurementTaken = consumed
      measurementEvent.value = value
      measurementEvent.save()
      res.send('meas event done')
    } else {
      res.send('meas event fucked')
    }
  })
}

module.exports = {
  findMeasurementEventsByPatientId,
  findMeasurementEventById,
  findAllMeasurementEvents,
  updateMeasurement,
}
