module.exports = {
  "resourceType": "Observation",
  "meta": {
    "versionId": "1",
  },
  "status": "final",
  "code": {
    "coding": [{
      "system": "http://loinc.org",
      "code": "29463-7",
      "display": "Body Weight"
    }],
    "text": "Body Weight"
  },
  "subject": {
    "reference": "Patient/467"
  },
  "effectiveDateTime": "2018-06-17T12:00:06+02:00",
  "valueQuantity": {
    "value": 4.291326283787461,
    "unit": "kg",
    "code": "kg"
  }
}
