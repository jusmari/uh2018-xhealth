import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

class PersonalView extends React.Component {
  state = {}
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://placehold.it/50x50' }}
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Perttu Lähteenmäki</Text>
          <Text style={styles.data}>Lorem ipsum</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 16,
    marginRight: 8
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  data: {
    fontSize: 12,
    color: '#999999'
  }
})

export default PersonalView
