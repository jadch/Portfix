// Test database, used so far for building the UI
// PF_stock_list: contains an array of objects, with each object containing info on a stock in the user's
// portfolio : ticker, name, quantity bought, entry price, current price and currency

// Stock_info: general information on a stock. Will eventually include the whole universe of stocks (?) not just those
// in the user's portfolio. This information isn't meant to be updated frequently or get too big.
// Architecture: tickers as keys, with each ticker associated to an object with the following info:
// name, currency, exchange on which the stock trades, a short description of the company from Bloomberg

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
         "currency":"USD",
         "exchange":"Nasdaq",
         "bloom_desc":"Apple Inc. designs, manufactures, and markets personal computers and related personal computing and mobile communication devices along with a variety of related software, services, peripherals, and networking solutions. The Company sells its products worldwide through its online stores, its retail stores, its direct sales force, third-party wholesalers, and resellers."
      },
      "NFLX":{
         "name":"Netflix",
         "currency":"USD",
         "exchange":"Nasdaq",
         "bloom_desc":"Netflix Inc. is an Internet subscription service for watching television shows and movies. Subscribers can instantly watch unlimited television shows and movies streamed over the Internet to their televisions, computers, and mobile devices and in the United States, subscribers can receive standard definition DVDs and Blu-ray Discs delivered to their homes."
      },
      "AMZN":{
         "name":"Amazon",
         "currency":"USD",
         "exchange":"Nasdaq",
         "bloom_desc":"Amazon.com, Inc. is an online retailer that offers a wide range of products. The Company products include books, music, videotapes, computers, electronics, home and garden, and numerous other products. Amazon offers personalized shopping services, Web-based credit card payment, and direct shipping to customers."
      },
      "JPM":{
         "name":"JPMorgan Chase",
         "currency":"USD",
         "exchange":"NYSE",
         "bloom_desc":"JPMorgan Chase & Co. provides global financial services and retail banking. The Company provides services such as investment banking, treasury and securities services, asset management, private banking, card member services, commercial banking, and home finance. JP Morgan Chase serves business enterprises, institutions, and individuals."
      }
   }
}

module.exports = initialState