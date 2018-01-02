import React, { Component } from 'react'
import './index.css'

import { Avatar, Button, } from 'antd'

import ContactBlock from '../../components/ContactBlock'

export default class Info extends Component {
	constructor() {
		super()
		this.state = {
			isContactBlockExpend: false,
		}
	}
	componentWillMount() {
		this._toggleContactBlock = this._toggleContactBlock.bind(this)
	}
	render(){
		return(
			<div style={{overflow:'hidden'}}>
			  <Avatar src="http://opx5dtob7.bkt.clouddn.com/avatar.jpeg" shape="circle" style={styles.avatar}/>
			  <p style={styles.title}>冯富铭</p>
			  <p style={styles.desc}>全栈菜鸟工程师</p>
			  <div className="info__contact-btn" onClick={this._toggleContactBlock}>
					Contact me
			  </div>
				<ContactBlock isExpend={this.state.isContactBlockExpend} />
			  <p style={styles.visitors}>1002人来过</p>
			</div>
		)
	}
	_toggleContactBlock() {
			const isExpend = this.state.isContactBlockExpend
			this.setState({
				isContactBlockExpend: !isExpend,
			})
	}
}

const styles = {
	avatar: {
		display: 'block',
		width: '200px',
		height: '200px',
		borderRadius: '50%',
		margin: '50px auto',
	},
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