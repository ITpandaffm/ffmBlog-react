import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
	  	<div style={styles.container}>
		  	<a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备17053037号-1</a>
	  	</div>
    )
  }
}

const styles = {
  container: {
	  display: 'flex',
    justifyContent: 'center',
	  alignItems: 'flex-end',
    height: '20px',
	  marginBottom: '10px',
  },
}