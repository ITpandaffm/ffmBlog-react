import React, { Component } from 'react'

import { Avatar, Row, Col, Affix, Button, } from 'antd'

const styles = {
  container: {
    width: '100%',
    margin: '0 auto',
    background: '#fafafa',
    opacity: .8,
    overflow: 'hidden',
    borderBottom: '1px solid #ccc',
    borderBottomRightRadius: '3px',
    borderBottomLeftRadius: '3px',
  },
  avatar: {
    width: '44px',
    height: '44px',
    borderRadius: '22px',
    overflow: 'hidden',
    marginLeft: '8px',
  },
}

export default class HeaderNav extends Component {
  render() {
    return (
      <Affix offsetTop={0}>
        <div style={styles.container}>
          <Row type="flex" justify="center" align="middle" style={{height: '60px'}}>
            <Col span={6} xs={8}>
              <Row type="flex" align="middle">
                <Col span={6} xs={12}>
                  <Avatar src="http://www.fengfuming.com/static/favicon.ico" style={styles.avatar}/>                        
                </Col>
                <Col span={12}>
                  <h1>_ffm__</h1>                  
                </Col>
              </Row>
            </Col>
            <Col span={10} xs={16}>
              <Row type="flex" justify="end">
                <Button type="default" style={{marginRight:'8px'}}>首页</Button>                
                <Button type="default" style={{marginRight:'8px'}}>文章</Button>                
                <Button type="default" style={{marginRight:'8px'}}>生活</Button>                
              </Row>
            </Col>
          </Row>
        </div>
      </Affix>
    )
  }
}
