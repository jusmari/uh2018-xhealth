// we require all models here to sync them with db
const db = require('./db.js')
const Patient = require('../model/patient.js')
const MedicationEvent = require('../model/medicationevent.js')
const MeasurementEvent = require('../model/measurementevent.js')

const someMedicationEvents = require('../../resource/medicationevents.json')
const someMeasurementEvents = require('../../resource/measurementevents.json')
// const someEvents = require('../../resource/medicationevents.json')

Patient.hasMany(MedicationEvent, {
  as: 'MedicationEvent',
})

Patient.hasMany(MeasurementEvent, {
  as: 'MeasurementEvent',
})

// define patient and some medicationevents for them
Patient
  .sync({
    force: true,
  })
  .then(() => {
    return Patient.create({
      fhirPatientId: 467,
      name: 'Perttu Lähteenlahti',
    })
  })
  .then((patient) => {
    MedicationEvent
      .sync({
        force: true,
      })
      .then(() => {
        for (const someEvent of someMedicationEvents) {
          MedicationEvent.create({
            ...someEvent,
          }).then(event => {
            patient.addMedicationEvent(event)
          })
        }
      })

    MeasurementEvent
      .sync({
        force: true,
      })
      .then(() => {
        for (const someEvent of someMeasurementEvents) {
          MeasurementEvent.create({
            ...someEvent,
          }).then(event => {
            patient.addMeasurementEvent(event)
          })
        }
      })

  })

module.exports = {
  db,
  Patient,
  MedicationEvent,
  MeasurementEvent,
}
