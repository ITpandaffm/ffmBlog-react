import React, { Component } from 'react'
import './App.css'

import FloatNav from './component/FloatNav/'
import Info from './component/Info/'
import Content from './component/Content/'

class App extends Component {
  render() {
    return (
      <div className="container">
        <FloatNav />
        <Info />
        <Content />
		<footer >
			<a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备17053037号-1</a>
		</footer>
      </div>
    );
  }
}

export default App;
