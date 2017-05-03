// This function takes in as input historical data from www.quandl.com Wiki EOD Stock Prices (https://www.quandl.com/data/WIKI-Wiki-EOD-Stock-Prices/documentation/documentation?modal=null)
// The data, for each stock, is obtained from Quandl with the following format:
// An array of arrays, with each array containing [date, adjusted_close, adjusted_volume]

// This function takes the query data (array of arrays) and returns it under the following format:
// an array of objects {date: xx, adjusted_close: xx, adjusted_volume: xx}

const ArraysToObjects = (ArrayofArrays) => {
  var return_array = [] //Array to be returned

  ArrayofArrays.map( (array) => {
    var temporary_obj = {}
    temporary_obj['date'] = array[0]
    temporary_obj['adjusted_close'] = +array[1].toFixed(2)
    temporary_obj['adjusted_volume'] = array[2]

    return_array.push(temporary_obj)
  })
  return return_array
}

module.exports = ArraysToObjects
