import axios from 'axios'
import moment from 'moment'

export const types = {
  REMINDER: 0,
  CHECKLIST: 1,
  INPUT_DATA: 2,
  WITH_INSTRUCTIONS: 3,
  TOUCHABLE: 4
}

export const TOGGLE_TASK = 'TOGGLE_TASK'
export const toggleTask = (eventKey, checkKey) => {
  return dispatch => {
    dispatch({
      type: TOGGLE_TASK,
      eventKey,
      checkKey
    })
  }
}

export const TOGGLE_MODAL = 'TOGGLE_MODAL'
export const toggleModal = eventKey => {
  return dispatch => {
    dispatch({
      type: TOGGLE_MODAL,
      eventKey
    })
  }
}

export const CHANGE_INPUT = 'CHANGE_INPUT'
export const changeInput = (target, value) => {
  return {
    type: CHANGE_INPUT,
    target,
    value
  }
}

const BASE_URL = 'http://10.20.190.123:4000/api'
export const SET_API_DATA = 'SET_API_DATA'
export const fetchApiData = () => {
  return dispatch => {
    axios.get(`${BASE_URL}/patients/1/medicationevents`).then(({ data }) => {
      dispatch({
        type: SET_API_DATA,
        data,
        target: 'medicationEvents'
      })

      const medicalIds = new Set(data.map(event => event.fhirMedicationId))

      axios
        .all(
          [...medicalIds].map(id => axios.get(`${BASE_URL}/medications/${id}`))
        )
        .then(res => {
          const data = res.map(({ data }) => data)

          dispatch({
            type: SET_API_DATA,
            data,
            target: 'medications'
          })
        })
        .catch(() => {
          console.log('kek fail')
        })
    })

    axios.get(`${BASE_URL}/patients/1`).then(({ data }) => {
      dispatch({
        type: SET_API_DATA,
        data,
        target: 'personalInfo'
      })
    })

    axios.get(`${BASE_URL}/patients/1/measurementevents`).then(({ data }) => {
      const events = {}
      data.forEach(e => (events[e.id] = processMeasurementEvent(e)))

      dispatch({
        type: SET_API_DATA,
        data: events,
        target: 'measurementEvents'
      })
    })
  }
}

const processMeasurementEvent = event => {
  moment.locale('fi')

  return {
    types: [types.INPUT_DATA],
    title: `Measure ${event.measurementName}`,
    time: `${moment(event['measureBy'])
      .format('LLLL')
      .slice(0, 2)} ${moment(event['measureBy']).format('HH:MM')}`,
    asking: [event.measurementName],
    infos: event.value ? { [event.measurementName]: event.value } : {},
    modalOpen: false
  }
}

const processMedicationEvents = event => {}
