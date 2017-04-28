import React, { Component } from 'react'

class StocklistItem extends Component {
  render() {
    const Stock = this.props.stock
    return (
      <div>
        <p>{Stock.ticker}</p>
      </div>
    )
  }
}

export default StocklistItem