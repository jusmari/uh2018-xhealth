import React from 'react'
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './components/HomeScreen/HomeScreen'
import SecondScreen from './components/SecondScreen'

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Second: SecondScreen
  },
  {
    initialRouteName: 'Home'
  }
)
