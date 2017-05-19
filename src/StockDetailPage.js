import React, { Component } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import array_of_arrays_to_array_of_objects from './helper_functions/array_of_arrays_to_array_of_objects.js'
import queryData from '../public/queryData.js'
import initialState from '../public/initialState.js'

var dateFormat = require('dateformat')

class StockDetailPage extends Component {
  render () {
    const ticker = this.props.match.params.ticker
    const stockInfo = initialState.Stock_info[ticker]
    const data = array_of_arrays_to_array_of_objects(queryData[ticker])

    // tickFormat formats the ticks on the XAxis. If january => indicate month + year
    const tickFormat = (tick) => {
      if (tick.slice(5, 7) === '01') {
        return dateFormat(tick, 'mmm yy')
      } else {
        return dateFormat(tick, 'mmm')
      }
    }

    //TooltipFormat formats the value displayed in the Tooltip
    const TooltipFormat = (value) => {
      return value.toFixed(2) + ' ' + stockInfo.currency
    }

    return (
      <div>
        <div className='StockDetailPage-Header'>
          <h2>{stockInfo.name + ' (' + ticker + ')' }</h2>
          <h3>{stockInfo.exchange}</h3>
        </div>
        <div className='StockDetailPage-PriceChart'>
          <AreaChart width={700} height={300} data={data}>
            <defs>
              <linearGradient id='adjustedClose' x1='0' y1='0' x2='0' y2='1'>
                <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
                <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey='date' tickFormatter={tickFormat} interval={28} />
            <YAxis />
            <CartesianGrid strokeDasharray='3 3' />
            <Tooltip formatter={TooltipFormat}/>
            <Area type='monotone' dataKey='adjusted_close' name='Adj. Close' stroke='#8884d8' fillOpacity={1} fill='url(#adjustedClose)' />
          </AreaChart>
        </div>
        <div className='StockDetailPage-Description'>
          <p>{stockInfo.bloom_desc}</p>
        </div>
      </div>
    )
  }
}

export default StockDetailPage
