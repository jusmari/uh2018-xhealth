import produce from 'immer'
import { TOGGLE_TASK } from '../actions'
import { types } from '../actions'

export default function reducer(
  state = {
    events: {
      1: {
        types: [types.REMINDER],
        title: 'Röntgen',
        time: '12:30',
        active: false
      },
      2: {
        types: [types.INPUT_DATA],
        title: 'Mittaa verenpaine',
        time: '14:00'
      },
      3: {
        types: [types.CHECKLIST],
        title: 'Syö lääkkeet',
        time: '15:00',
        checks: {
          1: { title: 'Tramadol', checked: false },
          2: { title: 'Burana', checked: false },
          3: { title: 'Astmalääke', checked: false }
        }
      },
      4: {
        types: [types.INPUT_DATA],
        title: 'Mittaa verenpaine',
        time: '19:00'
      },
      5: {
        types: [types.WITH_INSTRUCTIONS, types.TOUCHABLE],
        title: 'Päivittäinen kuntoutus',
        description: 'Löydät ohjeet kuntoutukseen klikkaamalla',
        time: '24:00'
      }
    },
    instructions: {
      shoulder: [
        'Olkapäiden kuntoutus',
        'Seisten seinää vasten. Kädet roikkuvat rennosti vartalon vieressä. Pyri koskettamaan seinää',
        'takaraivolla, olkapäillä, takapuolella ja kantapäillä. Tavoittele luonnollista, ryhdikästä asentoa.',
        'Huomio: Älä työnnä rintaa liikaa eteen tai notkista alaselkää.',
        'Toistot: 1-5 kertaa.'
      ]
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
