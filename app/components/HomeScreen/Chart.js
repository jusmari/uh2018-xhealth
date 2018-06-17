import React from 'react'
import { View } from 'react-native'
import { LineChart, Grid, YAxis } from 'react-native-svg-charts'

class Chart extends React.PureComponent {
  render() {
    var data = []

    const data1 = [71, 75, 75, 78, 75, 74, 73, 76, 70, 78, 75, 70, 71, 74, 83]
    const data3 = [105, 110, 108, 115, 112, 120, 110, 111, 107, 104, 107, 108]

    const data2 = [
      87.9,
      87.6,
      87.4,
      87.2,
      87.6,
      87.6,
      87.8,
      87.9,
      87.5,
      87.4,
      86.8,
      86.7,
      87.1,
      86.5,
      86.0
    ]
    if (this.props.type === '1') {
      data = data1
    } else if (this.props.type === '2') {
      data = data2
    } else {
      data = data3
    }
    return (
      <View style={{ height: 150, flexDirection: 'row' }}>
        <YAxis
          style={{ width: 30 }}
          data={data}
          contentInset={{ top: 20, bottom: 20 }}
          svg={{
            fill: 'grey',
            fontSize: 10
          }}
          numberOfTicks={8}
          formatLabel={value => `${value}`}
        />
        <LineChart
          style={{ flex: 1, marginLeft: 16, marginRight: 16 }}
          data={data}
          svg={{ stroke: 'rgb(134, 65, 244)', strokeWidth: '2.5' }}
          contentInset={{ top: 20, bottom: 20 }}
        >
          <Grid />
        </LineChart>
      </View>
    )
  }
}

export default Chart
