const MedicationEvent = require('../model/medicationevent.js')
const Patient = require('../model/patient.js')

function findAllMedicationEvents(req, res) {
  // eslint-disable-next-line eqeqeq, object-curly-newline
  MedicationEvent.findAll().then(medicationevents => {
    if (medicationevents) {
      res.json(medicationevents)
    } else {
      res.json({
        error: 'no medicationevents :(',
      })
    }
  })
}

function findMedicationEventById(req, res) {
  const {
    medicationEventId,
  } = req.params
  MedicationEvent.findOne({
    where: {
      id: medicationEventId,
    },
  }).then(medicationEvent => {
    if (medicationEvent) {
      res.json(medicationEvent)
    } else {
      res.json({
        error: `you done goofed your id, no findMedicationEventById for id ${medicationEventId}`,
      })
    }
  })
}
function findMedicationEventsByPatientId(req, res) {
  const {
    patientId,
  } = req.params
  console.log(Patient)
  Patient.findById(patientId).then(patient => {
    console.log(patient)
    patient.getMedicationEvent().then(medicationEvents => {
      if (medicationEvents) {
        res.json(medicationEvents)
      } else {
        res.json({
          error: `you done goofed your id, no findMedicationEventsByPatientId for id ${req.params.medicationeventId}`,
        })
      }
    })
  })
}

function updateMedication(req, res) {
  const consumed = req.body.consumed
  const id = req.body.id
  console.log(`stuff ${id} ${consumed}`)
  MedicationEvent.findOne({
    where: {
      id: id,
    },
  }).then(medicationEvent => {
    if (medicationEvent) {
      medicationEvent.medicationTaken = consumed
      medicationEvent.save()
      res.send('med event done')
    } else {
      res.send('med event fucked')
    }
  })

}
module.exports = {
  findMedicationEventsByPatientId,
  findMedicationEventById,
  findAllMedicationEvents,
  updateMedication,
}
