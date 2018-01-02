import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './normalize.css'
import './index.css'
import 'antd/dist/antd.css'

import HeaderNav from './components/HeaderNav'
import HomePage from './views/HomePage'
import ArticlesPage from './views/ArticlesPage'
import LifePage from './views/LifePage'

ReactDOM.render((
  <Router>
    <div className="root-container">
      <HeaderNav />
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/articles" component={ArticlesPage}></Route>
      <Route path="/life" component={LifePage}></Route>
    </div>
  </Router>
), document.getElementById('root'))

