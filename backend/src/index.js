const logger = require('./util/logger.js').logger
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/routes.js')
// eslint-disable-next-line eqeqeq, no-unused-vars
require('./db')
const Patient = require('./model/patient.js')

const app = express()
app.use(bodyParser.urlencoded({
  extended: true,
}))

app.use(bodyParser.json())

logger.info('haloo')

app.use('/api', routes)

app.get('/', (req, res) => {
  Patient.findAll().then(users => {
    res.send(users)
  })
})

app.listen(3000, () => console.log('Listening on port 3000'))
