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
    // For each stock, loop through all of its history and add it to PF_value.
    for (var i = 0; i < stock_hist.length; i++) {
      var hist_instance = stock_hist[i]
      var date = hist_instance[0]
      // If PF_value still has no key for a specific date, add it (as well as a key for 'stocks'). If a key exists,
      // just add the quantity and ajdusted data under this key (for a gvien stock)
      if (PF_value[date] && PF_value[date]['stocks']) {
        PF_value[date]['stocks'][stock] = {
          'quantity': quantities[stock],
          'adjusted_close': hist_instance[1]
        }
      }
      else {
        PF_value[date] = {}
        PF_value[date]['stocks'] = {}
        PF_value[date]['cash'] = {
          'usd': 5000
        }
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
