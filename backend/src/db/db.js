const Sequelize = require('sequelize')

const sequelize = new Sequelize('sweetDB', null, null, {
  dialect: 'sqlite',
  storage: 'test.sqlite',
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = {
  sequelize,
  Sequelize,
}
