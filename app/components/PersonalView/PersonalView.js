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
          <Text style={styles.data}>Seuraavaksi vuorossa: Mittaa verenpaine</Text>
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
    justifyContent: 'center',
    borderRadius: 1,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    elevation: 1
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
    color: '#007FFA'
  }
})

export default PersonalView
