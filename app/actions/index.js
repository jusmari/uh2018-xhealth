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
