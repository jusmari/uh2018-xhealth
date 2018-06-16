const axios = require('axios')
const MedicationEvent = require('../model/medicationevent.js')

function findFhirMedication(req, res) {
  const { medicationEventId, fhirId } = req.params

  MedicationEvent.findById(medicationEventId).then(stuff => console.log('buuttt'))
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

module.exports = {
  findFhirMedication,
}
