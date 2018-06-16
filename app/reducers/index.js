import produce from 'immer'
import { TOGGLE_TASK } from '../actions'

const types = {
  REMINDER: 0,
  CHECKLIST: 1,
  INPUT_DATA: 2
}

export default function reducer(
  state = {
    events: {
      1: {
        type: types.REMINDER,
        title: 'Röntgen',
        time: '12:30',
        active: false
      },
      2: {
        type: types.INPUT_DATA,
        title: 'Mittaa verenpaine',
        time: '14:00'
      },
      3: {
        type: types.CHECKLIST,
        title: 'Syö lääkkeet',
        time: '15:00',
        checks: {
          1: { title: 'Tramadol', checked: false },
          2: { title: 'Burana', checked: false },
          3: { title: 'Astmalääke', checked: false }
        }
      },
      4: {
        type: types.INPUT_DATA,
        title: 'Mittaa verenpaine',
        time: '19:00'
      }
    }
  },
  action
) {
  switch (action.type) {
    case TOGGLE_TASK:
      const { checkKey, eventKey } = action

      return produce(state, draft => {
        let check = draft.events[eventKey].checks[checkKey].checked
        draft.events[eventKey].checks[checkKey].checked = !check
      })
    default:
      return state
  }
}
