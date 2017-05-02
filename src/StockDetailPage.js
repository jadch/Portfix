import React, { Component } from 'react'

class StockDetailPage extends Component {
  render () {
    return (
      <div>
        <h1>You're here!</h1>
        <h2>{this.props.match.params.ticker}</h2>
      </div>
    )
  }
}

export default StockDetailPage