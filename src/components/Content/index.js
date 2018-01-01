import React, { Component } from 'react'

import { Divider, } from 'antd'
import './index.css'

const mockData = {
	code: 200,
	data: [
		{title: '我是大标题1', content: '好多内容类别周边动态／Related Project Update置信度Announcement起始时间2017-09-28内容Partial Application 提案为 JavaScript 提供了原生的柯里化支持（注：Partial Application 和 Currying 并…', timeStamp: '2014-10-12', likesNum: 30, commentsNum: 23},
		{title: '我是大标题2', content: '好多内容类别周边动态／Related Project Update置信度Announcement起始时间2017-09-28内容Partial Application 提案为 JavaScript 提供了原生的柯里化支持（注：Partial Application 和 Currying 并…', timeStamp: '2014-10-12', likesNum: 30, commentsNum: 23},
		{title: '我是大标题3', content: '好多内容类别周边动态／Related Project Update置信度Announcement起始时间2017-09-28内容Partial Application 提案为 JavaScript 提供了原生的柯里化支持（注：Partial Application 和 Currying 并…', timeStamp: '2014-10-12', likesNum: 30, commentsNum: 23},
	]
}

export default class Content extends Component {
	
	_handleClick(articleId){
		console.log('click', articleId)
	}
	
	componentWillMount(){
		this._handleClick = this._handleClick.bind(this)
	}

	render(){
		let arr = mockData.data
		return (
			<div className="content-container">
				<div className="sort">
					<ul>
						<li>全部 <span>63</span></li>
						<li>Javascript <span>14</span></li>
						<li>Css <span>24</span></li>
						<li>Node.js <span>12</span></li>

						<li>Node.js <span>12</span></li>
						<span>展开</span>
					</ul>
				</div>
				<Divider>文章分类</Divider>
				<div className="article">
					{
						arr.map((value, index)=> <ArticleItem 
								articleId = {index}
								key = {index}
								title = {value.title}
								content = {value.content}
								timeStamp = {value.timeStamp}
								likesNum = {value.likesNum}
								commentsNum = {value.commentsNum}
								handleClick = {this._handleClick}
							/>)
					}
				</div>
				<Divider>我是有底线的</Divider>
			</div>
		)
	}
}

const ArticleItem = function({articleId, title, content, timeStamp, likesNum, commentsNum, handleClick}){
	return (
		<div className="article-container">
			<h1 className="article--titile">{title}</h1>
			<p className="article--content">内容{content}<span style={{color: '#ccc'}}> 查看全文 > </span></p>
			<div className="article-info">
				<p className="article__timestamp">时间：{timeStamp}</p>
				<p className="article__statistics">点赞{likesNum} 评论{commentsNum}</p>
			</div>
			<button onClick={()=>{
				handleClick(articleId)
			}}>handleClick</button>
		</div>
	)
}

const FooterDeperator = function(){
	return (
		<i className="article--footer">
			End Ic
		</i>
	)
}

