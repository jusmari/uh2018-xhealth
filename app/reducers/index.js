import produce from 'immer'
import { TOGGLE_TASK, TOGGLE_MODAL, CHANGE_INPUT } from '../actions'
import { types } from '../actions'

export default function reducer(
  state = {
    events: {
      1: {
        types: [types.REMINDER],
        title: 'Röntgen',
        time: '12:30',
        active: false,
        description: 'Oulun sairaalassa, PriiPrään katu 3C. Huone 221.'
      },
      2: {
        types: [types.INPUT_DATA],
        title: 'Mittaa verenpaine',
        time: '14:00',
        asking: ['veren-paine'],
        modalOpen: false,
        infos: {}
      },
      3: {
        types: [types.CHECKLIST],
        title: 'Syö lääkkeet',
        time: '15:00',
        checks: {
          1: { title: 'Lääke1', checked: false },
          2: { title: 'Lääke2', checked: false },
          3: { title: 'Lääke3', checked: false }
        }
      },
      4: {
        types: [types.INPUT_DATA],
        title: 'Mittaa verenpaine',
        asking: ['veren-paine'],
        modalOpen: false,
        time: '19:00',
        infos: {}
      },
      5: {
        types: [types.WITH_INSTRUCTIONS, types.TOUCHABLE, types.CHECKLIST],
        title: 'Päivittäinen kuntoutus',
        description: 'Löydät ohjeet painamalla tästä',
        time: '24:00',
        checks: {
          1: { title: 'Kuntoutus tehty', checked: false }
        }
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
    case CHANGE_INPUT:
      const { target, value } = action

      return produce(state, draft => {
        draft.events[target.eventKey].infos[target.infoKey] = value
      })
    case TOGGLE_MODAL:
      return produce(state, draft => {
        draft.events[action.eventKey].modalOpen = !draft.events[action.eventKey]
          .modalOpen
      })
    case TOGGLE_TASK:
      const { checkKey, eventKey } = action

      return produce(state, draft => {
        draft.events[eventKey].checks[checkKey].checked = !draft.events[
          eventKey
        ].checks[checkKey].checked
      })
    default:
      return state
  }
}
