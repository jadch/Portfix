// HistoricalPFdata will hold the history of the client portfolio. The client shouldn't be able to modify the history of
// his or her portfolio. Not to be used to simulate a portfolio.

// Data stucture:
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
// Decided to include the adjusted_close of each stock, at least at first. In the future, might add a listener for when
// a stock split happens and the ajdusted_close needs to be, well, adjusted. We might also run a script that updates
// the adjusted_close daily or weekly, depending on the size of the db and other issues...

const historicalPFdata = {

}

module.exports = historicalPFdata
