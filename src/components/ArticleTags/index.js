import React, { Component } from 'react'

import { Tag } from 'antd'
import './index.css'

// const aColors = ['#f50', '#2db7f5', '#87d068', '#108ee9', '#eb2f96', '#fa8c16', '#2f54eb', '#1890ff', '#52c41a', '#faad14']
const aColors = ['red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'blue', 'geekblue', 'purple']

export default class ArticleTags extends Component {
  render() {
    return (
      <div className="article-tags-container">
        {
          this.props.data.map((value, index) => (<Tag color={aColors[index%(aColors.length)]} key={value} style={{marginBottom:'15px'}}>{value}</Tag>))
        }
      </div>
    )
  }
}
