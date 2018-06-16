import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'

export default class Chat extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <Text>Chat!</Text>
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
    flex: 6,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 0
  }
})
