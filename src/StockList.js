// StockList is a component that displays a list of the stocks in the client portfolio

import React, { Component } from 'react'
import initialState from '../public/initialState.js'
import StocklistItem from './StocklistItem.js'

class StockList extends Component {
  render() {
    //Take a simple array with a list of stock objects => transform it into JSX/HTML with HTMLify
    const StockArray = initialState.PF_stock_list
    const HTMLify = (array) => {
      var HTMLarray = []
      for (let i = 0; i < array.length; i++) {
        HTMLarray.push(
          <div key={StockArray[i].ticker}>
            <li><StocklistItem stock={StockArray[i]} /></li>
          </div>
        )
      }
      return HTMLarray
    }
    return (
      <ul className='StockList'>
        <div>
          {HTMLify(StockArray)}
        </div>
      </ul>
    )
  }
}

export default StockList
