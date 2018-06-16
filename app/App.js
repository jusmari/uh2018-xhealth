import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { createStore, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import Tabs from './router/router'

const store = createStore(reducer, applyMiddleware(thunk))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    )
  }
}
/*
const RootStack = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Instructions: Instructions
  },
  {
    //initialRouteName: 'TestScreen'
    initialRouteName: 'Home'
  }
)*/
