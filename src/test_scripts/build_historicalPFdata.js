// This function is just used to take in queryData and create a historicalPFdata-type file.
// For starters, we will create a portfolio made up of the 4 stocks, with unchanging quantities for each stock.

const fs = require('fs')
const queryData = require('../../public/queryData.js')

const PF_data = {
  '2016-01-01': {
    'stocks': {
      'AAPL': {
        'quantity': 100
      },
      'AMZN': {
        'quantity': 200
      }
    },
    'cash': {
      'usd': 5000
    }
  }
}

fs.writeFile('test_historicalPFdata.js', JSON.stringify(PF_data), 'utf8', (err) => {
  if (err) { throw err } else {
    console.log('test_historicalPFdata has been saved!')
  }
})
