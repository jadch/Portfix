// This function will take in an object an output an array
// Input:   { 'date': portfolio_value, 'date': portfolio_value, ...  }
// Output:  [ [date, portfolio_value], [date, portfolio_value], ...]

// This makes it useful for creating charts (where the supported input is an array of arrays and not an object).

const object_to_array = (object) => {
  var array = []
  var keys = Object.keys(object)
  keys.map( (key) => {
    array.push([key, object[key]])
  })
  return array
}

// const test_historicalPFdata = require('../test_scripts/test_historicalPFdata.js')
// const portfolioValuation = require('./portfolioValuation.js')

// const test = object_to_array(portfolioValuation(test_historicalPFdata))
// console.log(test)

module.exports = object_to_array
