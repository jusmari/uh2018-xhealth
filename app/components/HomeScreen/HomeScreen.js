import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import PersonalView from '../PersonalView/PersonalView'
import SegmentControl from 'react-native-segment-controller'

export default class HomeScreen extends React.Component {
  state = {}

  render() {
    return (
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <PersonalView />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
