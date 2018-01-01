import React, { Component } from 'react'
import './index.css'

import Avatar from './Avatar/'
import './index.css'

export default class Info extends Component {
	render(){
		return(
			<div>
			  <Avatar />
			  <p style={styles.title}>冯富铭</p>
			  <p style={styles.desc}>全栈菜鸟工程师</p>
			  <div className="contact-btn">
					Contact me
			  </div>
			  <p style={styles.visitors}>1002人来过</p>
			</div>
		)
	}
}

const styles = {
	title: {
		fontSize: '22px',
	},
	desc: {
		fontSize: '16px',
		margin: '8px 0',
	},
	visitors: {
		fontSize: '14px',
		color: '#ccc',
		marginTop: '15px',
	}
}