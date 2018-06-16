const Patient = require('../model/patient.js')

function findAllPatients(req, res) {
  // eslint-disable-next-line eqeqeq, object-curly-newline
  Patient.findAll().then(patients => {
    if (patients) {
      res.json(patients)
    } else {
      res.json({
        error: 'no patients :(',
      })
    }
  })
}

function findPatientById(req, res) {
  const {
    patientId,
  } = req.params
  Patient.findOne({
    where: {
      id: patientId,
    },
  }).then(patient => {
    if (patient) {
      res.json(patient)
    } else {
      res.json({
        error: `you done goofed your id, no findPatientById for id ${req.params.patientId}`,
      })
    }
  })
}

module.exports = {
  findPatientById,
  findAllPatients,
}
