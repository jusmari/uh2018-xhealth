const {
  sequelize,
  Sequelize,
} = require('../db/db.js')
// const Patient = require('../model/Patient.js')
const MedicationEvent = sequelize.define('medication_event', {
  fhirMedicationId: {
    type: Sequelize.INTEGER,
  },
  medicationTaken: {
    type: Sequelize.BOOLEAN,
  },
  timeToConsume: {
    type: Sequelize.DATE,
  },
})

module.exports = MedicationEvent
