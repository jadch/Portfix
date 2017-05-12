// This function is just used to take in queryData and create a historicalPFdata-type file.
// For starters, we will create a portfolio made up of the 4 stocks, with unchanging quantities for each stock.
const fs = require('fs')
const queryData = require('../../public/queryData.js')

// Default data for the test portfolio: four stocks and fixed, unchanging quantities from beginning to end
const stocks = ['AAPL', 'AMZN', 'NFLX', 'JPM']
const usd_cash = 5000
const quantities = {
  'AAPL': 100,
  'AMZN': 200,
  'NFLX': 100,
  'JPM': 200
}

// Constructor function, will create an object that follows the format specified in historicalPFdata.js
const constructor = (queryData, quantities) => {
  var PF_value = {}
  stocks.map( (stock) => {
    var stock_hist = queryData[stock]
    for (var i = 0; i < stock_hist.length; i++) {
      var hist_instance = stock_hist[i]
      var date = hist_instance[0]
      if (PF_value[date] && PF_value[date]['stocks']) {
        PF_value[date]['stocks'][stock] = {
          'quantity': quantities[stock],
          'adjusted_close': hist_instance[1]
        }
      }
      else {
        PF_value[date] = {}
        PF_value[date]['stocks'] = {}
        PF_value[date]['stocks'][stock] = {
          'quantity': quantities[stock],
          'adjusted_close': hist_instance[1]
        }
      }
    }
  })
  return PF_value
}

const PF_data = constructor(queryData, quantities)

fs.writeFile('test_historicalPFdata.js', JSON.stringify(PF_data), 'utf8', (err) => {
  if (err) { throw err } else {
    console.log('test_historicalPFdata has been saved!')
  }
})



// const PF_data = {
//   '2016-01-01': {
//     'stocks': {
//       'AAPL': {
//         'quantity': 100
//       },
//       'AMZN': {
//         'quantity': 200
//       }
//     },
//     'cash': {
//       'usd': 5000
//     }
//   }
// }
