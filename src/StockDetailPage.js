import React, { Component } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'

class StockDetailPage extends Component {
  render () {
    const data = [
      {name: 'Page A', uv: 4000},
      {name: 'Page B', uv: 3000},
      {name: 'Page C', uv: 2000},
      {name: 'Page D', uv: 2780},
      {name: 'Page E', uv: 1890},
      {name: 'Page F', uv: 2390},
      {name: 'Page G', uv: 3490}
      ]
    return (
      <div>
        <div>
          <h2>{this.props.match.params.ticker}</h2>
        </div>
        <div>
          <AreaChart width={700} height={300} data={data}>
            <defs>
              <linearGradient id="adjustedClose" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type='monotone' dataKey='uv' stroke='#8884d8' fillOpacity={1} fill='url(#adjustedClose)' />
          </AreaChart>
        </div>
      </div>
    )
  }
}

export default StockDetailPage