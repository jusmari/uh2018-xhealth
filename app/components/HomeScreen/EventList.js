import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
//import Timeline from 'react-native-timeline-listview'
import CustomTimeline from './CustomTimeline'


const EventList = ({ events }) => {
  const renderDetail = (rowData, sectionID, rowID) => {
    let title = <Text style={[styles.title]}>{rowData.title}</Text>
    var desc = null
    if (rowData.description && rowData.imageUrl)
      desc = (
        <View style={styles.descriptionContainer}>
          <Image source={{ uri: rowData.imageUrl }} style={styles.image} />
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      )

    return (
      <View style={{ flex: 1 }}>
        {title}
        {desc}
      </View>
    )
  }

  return (
    <CustomTimeline
      data={events}
      circleSize={20}
      scrollEventThrottle={16}
      onScroll={console.log("test")}
      circleColor="rgb(45,156,219)"
      lineColor="rgb(45,156,219)"
      timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
      timeStyle={{
        textAlign: 'center',
        backgroundColor: '#ff9797',
        color: 'white',
        padding: 5,
        borderRadius: 13
      }}
      descriptionStyle={{ color: 'gray' }}
      options={{
        style: { paddingTop: 5 }
      }}
      innerCircle={'dot'}
      renderEvent={renderDetail}
    />
  )
}

export default EventList

const styles = StyleSheet.create({
  list: {
    flex: 1,
    marginTop: 40
  }
})
