const initialState = {
   "PF_stock_list":[
      {
         "ticker":"AAPL",
         "quantity":100,
         "entry_price":120.20,
         "last_available_price":143.79,
         "currency":"USD",
         "name":"Apple"
      },
      {
         "ticker":"NFLX",
         "quantity":100,
         "entry_price":183.07,
         "last_available_price":153.08,
         "currency":"USD",
         "name":"Netflix"
      },
      {
         "ticker":"AMZN",
         "quantity":200,
         "entry_price":822.96,
         "last_available_price":918.38,
         "currency":"USD",
         "name":"Amazon"
      },
      {
         "ticker":"JPM",
         "quantity":200,
         "entry_price":70.20,
         "last_available_price":65.68,
         "currency":"USD",
         "name":"JPMorgan Chase"
      }
   ],
   "Stock_info":{
      "AAPL":{
         "name":"Apple",
         "currency":"USD"
      },
      "NFLX":{
         "name":"Netflix",
         "currency":"USD"
      },
      "AMZN":{
         "name":"Amazon",
         "currency":"USD"
      },
      "JPM":{
         "name":"JPMorgan Chase",
         "currency":"USD"
      }
   }
}

module.exports = initialState