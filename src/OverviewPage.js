import React, { Component } from 'react'
import StockList from './StockList.js'
import PortfolioChart from './PortfolioChart.js'

class OverviewPage extends Component {
  render () {
    return (
      <div className='OverviewPage'>
        <h1>Portfolio Overview</h1>
        <PortfolioChart />
        <StockList />
      </div>
    )
  }
}

export default OverviewPage
