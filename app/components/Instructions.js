import React from 'react'
import { Text, StyleSheet, View, WebView } from 'react-native'
import { connect } from 'react-redux'

const Instructions = props => {
  const subject = props.navigation.state.params
  const instructions = props.instructions[subject]

  const title = (
    <Text style={styles.title} key={'title'}>
      {instructions[0]}
    </Text>
  )
  const text = instructions.slice(1).map(t => <Text key={t}>{t}</Text>)

  return (
    <View style={styles.container}>
      {[title, text]}{' '}
      <WebView
        javaScriptEnabled={true}
        domStorageEnabled={true}
        source={{ uri: 'https://www.youtube.com/embed/-x13R6r-RGY' }}
      />
    </View>
  )
}

const mapStateToProps = state => ({
  instructions: state.instructions
})

export default connect(mapStateToProps)(Instructions)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 35,
    flex: 1
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 10
  },
  video: {
    marginTop: 25
  }
})
