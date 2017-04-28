import React, { Component } from 'react'

class StocklistItem extends Component {
  render() {
    const Stock = this.props.stock
    return (
      <div className='StocklistItem'>
        <p>{Stock.name} ({Stock.ticker})</p>
        <p>{Stock.quantity}</p>
        <p>{Stock.last_available_price}</p>
      </div>
    )
  }
}

export default StocklistItem