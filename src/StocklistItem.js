import React, { Component } from 'react'

class StocklistItem extends Component {
  render() {
    const Stock = this.props.stock
    const percentage_change = (((Stock.last_available_price - Stock.entry_price) / Stock.entry_price) * 100).toFixed(2)

    return (
      <div className='StocklistItem'>
        <p><a href='/StockDetailPage'>{Stock.name} ({Stock.ticker})</a></p>
        <p>{Stock.quantity}</p>
        <p>{Stock.entry_price}</p>
        <p>{Stock.last_available_price}</p>
        <p className={percentage_change > 0 ? 'PositiveChange' : 'NegativeChange'}>{percentage_change > 0 ? '+' + percentage_change + '%' : percentage_change + '%'}</p>
      </div>
    )
  }
}

export default StocklistItem
