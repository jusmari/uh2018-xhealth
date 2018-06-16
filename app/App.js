import React from 'react'
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './components/HomeScreen/HomeScreen'

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home'
  }
)
