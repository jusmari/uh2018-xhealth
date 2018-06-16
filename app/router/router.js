import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'

import HomeScreen from '../components/HomeScreen/HomeScreen'
import Measurements from '../components/HomeScreen/Measurements'
import Chat from '../components/HomeScreen/Chat'
import Instructions from '../components/Instructions'

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Instructions: Instructions
})

export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Measurements: Measurements,
    Chat: Chat
  },
  {
    initialRouteName: 'Home'
    /* Other configuration remains unchanged */
  }
)
