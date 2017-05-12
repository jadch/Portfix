// This function will take in an object and output an array of objects
// Input:   { 'date': portfolio_value, 'date': portfolio_value, ...  }
// Output:  [ {'date': date, 'value': portfolio_value }, {'date': date, 'value': portfolio_value }, ...]

// This makes it useful for creating charts (where the supported input is an array of objects and not an object).

const object_to_array = (object) => {
  var array = []
  var keys = Object.keys(object)
  keys.map( (key) => {
    array.push({
      'date': key,
      'value': object[key]
    })
  })
  return array
}

// const test_historicalPFdata = require('../test_scripts/test_historicalPFdata.js')
// const portfolioValuation = require('./portfolioValuation.js')

// const test = object_to_array(portfolioValuation(test_historicalPFdata))
// console.log(test)

module.exports = object_to_array
