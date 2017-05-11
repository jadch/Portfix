// This function will compute the valuation of a portfolio for a given time period using
//      1) historical stock data and
//      2) the list of stocks making up the portfolio
//
// The function will return an object: { date: 'value' }
// The inputs of the function will probably change in the future once a proper database is used and a lasting
// data architecture is adopted.

// Temporary code to get the input data until a database is implemented
const queryData = require('../../public/queryData.js')
const initialState = require('../../public/initialState.js')

const ticker_array = initialState.PF_stock_list.map( (stock) => stock.ticker )
const quantity_obj = {}
const quantity_array = initialState.PF_stock_list.map( (stock) => quantity_obj[stock.ticker] = stock.quantity )
const dates = queryData['AAPL'].map( (instance) => instance[0] )

console.log(ticker_array)
console.log(quantity_obj)
console.log(dates) // Temporary code to have an array of days on which the stock market is open.

const portfolioValuation = () => {
  for (var i = 0; i < dates.length; i++) {
    var daily_val = 0
    ticker_array.map( (ticker) => {
      daily_val = daily_val + quantity_obj[ticker] * queryData['??']
    })
  }
}

module.exports = portfolioValuation
