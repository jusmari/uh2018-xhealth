const axios = require('axios')
const diastolic = require('./resource/diastolic.js')
const systolic = require('./resource/systolic.js')

const times = [
  '2018-06-02T09:00:06+02:00',
  '2018-06-03T09:00:06+02:00',
  '2018-06-04T09:00:06+02:00',
  '2018-06-05T09:00:06+02:00',
  '2018-06-06T09:00:06+02:00',
  '2018-06-07T09:00:06+02:00',
  '2018-06-08T09:00:06+02:00',
  '2018-06-09T09:00:06+02:00',
  '2018-06-10T09:00:06+02:00',
  '2018-06-11T09:00:06+02:00',
  '2018-06-12T09:00:06+02:00',
  '2018-06-13T09:00:06+02:00',
  '2018-06-14T09:00:06+02:00',
  '2018-06-15T09:00:06+02:00',
  '2018-06-16T09:00:06+02:00',
]

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
for (const time of times) {
  systolic.effectiveDateTime = time
  systolic.valueQuantity.value = getRandomArbitrary(100, 130)
  diastolic.effectiveDateTime = time
  diastolic.valueQuantity.value = getRandomArbitrary(70, 99)

  console.log(diastolic)
  axios.post('http://85.23.127.238:57773/csp/healthshare/fhirserver/fhir/Observation', systolic, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
  }).then(response => console.log('sent systolic ' + time + ' ' + response.statusCode))

  axios.post('http://85.23.127.238:57773/csp/healthshare/fhirserver/fhir/Observation', diastolic, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
    },
  }).then(response => console.log('sent diastolic ' + time + ' ' + response.statusCode))
}
setTimeout(() => {
  console.log('did it')
}, 15000)
