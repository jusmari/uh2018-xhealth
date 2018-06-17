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
  value: {
    type: Sequelize.FLOAT,
  },
})

module.exports = MeasurementEvent
