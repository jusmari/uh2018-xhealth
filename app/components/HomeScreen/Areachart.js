import React from 'react'
import { StackedAreaChart } from 'react-native-svg-charts'
import * as shape from 'd3-shape'

class Areachart extends React.PureComponent {
  render() {
    const data = [
      {
        time: new Date(2018, 6, 8),
        systolic: 120,
        diastolic: 80
      },
      {
        time: new Date(2018, 6, 9),
        systolic: 119,
        diastolic: 81
      },
      {
        time: new Date(2018, 6, 10),
        systolic: 121,
        diastolic: 82
      },

      {
        time: new Date(2018, 6, 11),
        systolic: 122,
        diastolic: 80
      },
      {
        time: new Date(2018, 6, 12),
        systolic: 124,
        diastolic: 81
      },
      {
        time: new Date(2015, 6, 13),
        systolic: 119,
        diastolic: 79
      },
      {
        time: new Date(2015, 6, 13),
        systolic: 117,
        diastolic: 73
      },
      {
        time: new Date(2015, 6, 14),
        systolic: 117,
        diastolic: 75
      }
    ]

    const colors = ['#ff000c', '#ffffff']
    const keys = ['systolic', 'diastolic']
    const svgs = [
      { onPress: () => console.log('systolic') },
      { onPress: () => console.log('diastolic') }
    ]

    return (
      <StackedAreaChart
        style={{ height: 150, paddingVertical: 16 }}
        data={data}
        keys={keys}
        colors={colors}
        curve={shape.curveNatural}
        showGrid={true}
        svgs={svgs}
      />
    )
  }
}

export default Areachart
