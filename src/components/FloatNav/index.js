import React, { Component } from 'react'
import './index.css'

export default class FloatNav extends Component {
    constructor(props){
        super(props)
        this.state = {
            bExpend: false
        }
    }

    componentWillMount(){
        this._handleClickMenu = this._handleClickMenu.bind(this)
    }
    _handleClickMenu(){
        let currentExpend = this.state.bExpend
        this.setState({
            bExpend: !currentExpend
        })
    }
	render(){
        let menuStatus = this.state.bExpend ? 'menu--expend' : 'menu--normal'
		return (
			<nav>
                <ul>
                    <li><a>主页</a></li>
                    <li><a>博客</a></li>
                    <li><a>生活</a></li>
                </ul>
                <div className={`menu ${menuStatus}`} onClick={this._handleClickMenu}>
                    <svg viewBox="0 0 800 600">
                        <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                        <path d="M300,320 L540,320" id="middle"></path>
                        <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                    </svg>
                </div>
            </nav>
		)
	}
}