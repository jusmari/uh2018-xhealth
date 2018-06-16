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
