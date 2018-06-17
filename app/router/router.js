import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation'
import React from 'react'

import HomeScreen from '../components/HomeScreen/HomeScreen'
import Measurements from '../components/HomeScreen/Measurements'
import Chat from '../components/HomeScreen/Chat'
import Instructions from '../components/Instructions'
import Ionicons from 'react-native-vector-icons/Ionicons'

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
    initialRouteName: 'Home',

    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
        } else if (routeName === 'Measurements') {
          iconName = `ios-options${focused ? '' : '-outline'}`
        } else if (routeName === 'Chat') {
          iconName = `ios-chatboxes${focused ? '' : '-outline'}`
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: '#007aff',
      inactiveTintColor: 'gray'
    }

    /* Other configuration remains unchanged */
  }
)
