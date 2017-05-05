import React, { Component } from 'react'
import StockList from './StockList.js'

class OverviewPage extends Component {
  render () {
    return (
      <div className='OverviewPage'>
        <h1>Portfolio Overview</h1>
        <StockList />
      </div>
    )
  }
}

export default OverviewPage
