import React, { Component } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import ArraysToObjects from './helper_functions/ArraysToObjects.js'
import queryData from '../public/queryData.js'

class StockDetailPage extends Component {
  render () {
    const ticker = this.props.match.params.ticker
    const data = ArraysToObjects(queryData[ticker])
    return (
      <div>
        <div>
          <h2>{ticker}</h2>
        </div>
        <div>
          <AreaChart width={700} height={300} data={data}>
            <defs>
              <linearGradient id="adjustedClose" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey='date' />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type='monotone' dataKey='adjusted_close' stroke='#8884d8' fillOpacity={1} fill='url(#adjustedClose)' />
          </AreaChart>
        </div>
      </div>
    )
  }
}

export default StockDetailPage