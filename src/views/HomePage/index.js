import React, { Component } from 'react'

import HeaderNav from '../../components/HeaderNav'
import Info from '../../modules/Info'
import Content from '../../components/Content'

export default class HomePage extends Component {
  render() {
    return (
      <div style={{width: '100%', height:'1000px'}}>
        <HeaderNav />
        <Info />
        <Content />
      </div>
    )
  }
}