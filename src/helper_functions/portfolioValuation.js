// This function will compute the valuation of a portfolio for a given time period using as input:
//      An object with an architecture like the one described in historicalPFdata.js
//
// {
//   'aaaa-mm-dd': {
//     'stocks': {
//       'ticker': {
//         'quantity': xxx,
//         'adjusted_close': xxx
//       }
//     },
//     'cash': {
//         'usd': xxx,
//       }
//   },
// }
//
// The function will return an object: { date: 'value' }. A collection of the value of our portfolio for given dates.
// The inputs of the function might still change in the future once a proper database is used and a lasting
// data architecture is adopted.
const historicalPFdata = require('../test_scripts/test_historicalPFdata.js')

const portfolioValuation = (historicalPFdata) => {
  const PF_valutation = {}
  const dates = Object.keys(historicalPFdata)
  //Looping on all the dates, calculating the PF value at each date using the valuate function
  for (var i = 0; i < dates.length; i++) {
    var date = dates[i]
    var daily_data = historicalPFdata[date]
    PF_valutation[date] = valuate(daily_data)
  }
  return PF_valutation
}

const valuate = (data) => {
  var value = 0
  var cash = data.cash.usd
  var stocks = Object.keys(data.stocks)
  //Looping on all the stocks in the PF and including their value in the PF valuation
  stocks.map( (stock) => {
    value = value + data.stocks[stock].quantity * data.stocks[stock].adjusted_close
  })
  value = value + cash
  return value
}

const test = portfolioValuation(historicalPFdata)
console.log(test)

module.exports = portfolioValuation
