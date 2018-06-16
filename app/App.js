import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'

import HomeScreen from './components/HomeScreen/HomeScreen'
import Instructions from './components/Instructions'

const store = createStore(reducer, applyMiddleware(thunk))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    )
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Instructions: Instructions
  },
  {
    //initialRouteName: 'TestScreen'
    initialRouteName: 'Home'
  }
)
