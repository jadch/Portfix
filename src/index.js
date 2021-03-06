import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App'
import StockDetailPage from './StockDetailPage.js'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/StockDetailPage/:ticker' component={StockDetailPage} />
    </div>
  </Router>,
  document.getElementById('root')
)
