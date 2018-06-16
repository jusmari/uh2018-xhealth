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
