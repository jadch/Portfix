// HistoricalPFdata will hold the history of the client portfolio. The client shouldn't be able to modify the history of
// his or her portfolio. Not to be used to simulate a portfolio.

// Data stucture:
// {
//   'aaaa-mm-dd': {
//     'stocks': {
//       'ticker': {
//         'quantity': xxx,
//       }
//     },
//     'cash': {
//         'usd': xxx,
//       }
//   },
// }

// The reason the stock price is not included in the data is because the calculated adjusted close changes
// in the event of a split, or dividends.

const historicalPFdata = {

}

module.exports = historicalPFdata
