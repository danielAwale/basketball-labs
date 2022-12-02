import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as chartJS} from 'chart.js/auto'

const BarChartStats = ({chartData}) => {
  return (
    <div style={{width:1000, height:500}}>
      <Bar data={chartData} options={{
      maintainAspectRatio: false,
    }} />
    </div>
  )
}

export default BarChartStats