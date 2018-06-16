import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Timeline from 'react-native-timeline-listview'

const EventList = ({ events }) => {
  const EventsList = events.map(event => (
    <Text key={`${event.title}-${event.date}`}>{event.title}</Text>
  ))

  return EventsList
}

export default EventList
