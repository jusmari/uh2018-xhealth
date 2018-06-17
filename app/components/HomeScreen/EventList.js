import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

import CustomTimeline from './CustomTimeline'
import { types } from '../../actions'

const EventList = ({ events, navigation }) => {
  renderDetail = (rowData, sectionID, rowID) => {
    const eventTypes = rowData.types

    const title = rowData.description ? (
      <View style={styles.description}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
          {rowData.title}
        </Text>
        <Text style={{ marginTop: 10 }}>{rowData.description}</Text>
      </View>
    ) : (
      <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{rowData.title}</Text>
    )

    if (eventTypes.includes(types.TOUCHABLE)) {
      return (
        <TouchableOpacity
          style={styles.container}
          onPress={() => instructionsPress(navigation)}
        >
          <View>{title}</View>
        </TouchableOpacity>
      )
    }

    return <View style={styles.container}>{title}</View>
  }

  instructionsPress = navigation => {
    navigation.navigate('Instructions', 'shoulder')
  }

  return (
    <CustomTimeline
      data={events}
      circleSize={20}
      scrollEventThrottle={16}
      onScrollBeginDrag={() => console.log('test')}
      circleColor="rgb(189,220,253)"
      lineColor="rgb(189,220,253)"
      timeContainerStyle={{ minWidth: 72,    backgroundColor: '#F7F7F7'    }}
      timeStyle={{
        textAlign: 'center',
        padding: 5,
        borderRadius: 13,
        backgroundColor: '#F7F7F7'
      }}
      descriptionStyle={{ color: 'gray',     backgroundColor: '#F7F7F7'    }}
      innerCircle={'dot'}
      renderDetail={renderDetail}
    />
  )
}

export default EventList

const styles = StyleSheet.create({
  list: {
    flex: 1,
    backgroundColor: '#F7F7F7'
  },
  container: {
    flex: 1,
    paddingBottom: 10,
    marginTop: -10,
    backgroundColor: '#F7F7F7'

  },
  description: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 20
  } 
})
