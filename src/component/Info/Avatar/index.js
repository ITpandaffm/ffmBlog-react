import React from 'react'
import './index.css'

export default function Avatar(){
	return (
		<div className="avatar">
			<img src={require('./avatar.jpeg')} alt="加载头像失败"/>
		</div>
	)
}
