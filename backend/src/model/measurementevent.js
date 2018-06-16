const {
  sequelize,
  Sequelize,
} = require('../db/db.js')

const MeasurementEvent = sequelize.define('measurement_event', {
  measurementName: {
    type: Sequelize.STRING,
  },
  measurementTaken: {
    type: Sequelize.BOOLEAN,
  },
  measureBy: {
    type: Sequelize.DATE,
  },
})

module.exports = MeasurementEvent
