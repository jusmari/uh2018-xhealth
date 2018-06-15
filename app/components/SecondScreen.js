import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class SecondScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>TOKA SCREENI</Text>
        <Button
          title="TAKAS"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
