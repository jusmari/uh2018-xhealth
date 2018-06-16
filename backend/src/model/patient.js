const {
  sequelize,
  Sequelize,
} = require('../db/db.js')

const Patient = sequelize.define('patient', {
  fhirPatientId: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING,
  },
})

module.exports = Patient
