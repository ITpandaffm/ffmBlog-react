import React, { Component } from 'react'
import { Card, Icon, Button, Popover,} from 'antd'

import './index.css'


export default class ContactBlock extends Component {
  render() {
    return (
      <div className={this.props.isExpend ? 'container__expend' : ''} style={styles.container}>
        <Popover placement="topLeft" title={'点击下方链接'} content={<a href="https://github.com/ITpandaffm" target="_blank">Click me to my Github page!</a>} arrowPointAtCenter>
          <Button type="primary" ghost shape="circle" icon="github" />
        </Popover>
        <Popover placement="topLeft" title={'扫码在钉钉上找我'} content={<img alt="Oooopz..." src="http://opx5dtob7.bkt.clouddn.com/IMG_3802.JPG" style={{width: '140px', height: '140px'}} />} arrowPointAtCenter>
          <Button type="primary" ghost shape="circle" icon="dingding"/>
        </Popover>
        <Popover placement="topLeft" title={'扫码添加微信'} content={<img alt="Oooopz..." src="http://opx5dtob7.bkt.clouddn.com/wechat.JPG" style={{width: '140px', height: '140px'}} />} arrowPointAtCenter>
          <Button type="primary" ghost shape="circle" icon="wechat" />
        </Popover>
        <Popover placement="topLeft" title={'扫码添加qq'} content={<img alt="Oooopz..." src="http://opx5dtob7.bkt.clouddn.com/qq.JPG" style={{width: '140px', height: '140px'}} />} arrowPointAtCenter>
          <Button type="primary" ghost shape="circle" icon="qq" />
        </Popover>
        <Popover placement="topLeft" title={'点击下方链接'} content={<a href="mailto:fengfuming2007@126.com?subject=Hey%20FFM&amp;body=Hello!" target="_blank">Click me to send Email to author!</a>} arrowPointAtCenter>
          <Button type="primary" ghost shape="circle" icon="mail" />
        </Popover>
      </div>
    )
  }
}
const styles = {
  container: {
    transition: 'height .3s linear',
    display: 'flex', 
    justifyContent:'space-around', 
    alignItems: 'center',
    width: '40%',
    height: '0',
    margin: '0 auto', 
    borderRadius: '10px',
    overflow: 'hidden',
  },
}