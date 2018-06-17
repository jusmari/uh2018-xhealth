import React from 'react'
import { StyleSheet, Text, SafeAreaView, View } from 'react-native'
import Chart from './Chart'
import Areachart from './Areachart'

export default class Measurements extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safearea}>
        <View>
          <Text style={styles.header}>Blood pressure</Text>
          <Chart type="3" />
          <Text style={styles.header}>Pulse</Text>
          <Chart type="1" />
          <Text style={styles.header}>Body weight</Text>
          <Chart type="2" />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1
  },
  header: {
    paddingLeft: 8,
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
    flex: 6,
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 0
  }
})
