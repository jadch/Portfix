import React, { Component } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import portfolioValuation from './helper_functions/portfolioValuation.js'
import test_historicalPFdata from './test_scripts/test_historicalPFdata.js'
import object_to_array from './helper_functions/object_to_array.js'
var dateFormat = require('dateformat')

class PortfolioChart extends Component {
  render () {
    var PF_valuation = portfolioValuation(test_historicalPFdata)
    const data = object_to_array(PF_valuation)

    // tickFormat formats the ticks on the XAxis. If january => indicate month + year
    const tickFormat = (tick) => {
      if (tick.slice(5, 7) === '01') {
        return dateFormat(tick, 'mmm yy')
      } else {
        return dateFormat(tick, 'mmm')
      }
    }

    return (
      <div>
        <AreaChart width={700} height={300} data={data}>
          <defs>
            <linearGradient id='value' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='date' interval={28} tickFormatter={tickFormat}/>
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Area type='monotone' dataKey='value' name='Portfolio Value' stroke='#8884d8' fillOpacity={1} fill='url(#value)' />
        </AreaChart>
      </div>
    )
  }
}

export default PortfolioChart