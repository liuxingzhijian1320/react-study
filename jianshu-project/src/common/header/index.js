// import React, { Component } from 'react'
import React from 'react'
import { connect } from 'react-redux'

import {
	HeaderStyle,
	Logo,
	Nav,
	NavItem,
	SearchBox,
	Search,
	Addtion,
	Button
} from './style'
/**


class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			// isFocused: false
		}
	}
	render(){
		return (
			<HeaderStyle>
				<Logo />
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>
					<NavItem className="right">登陆</NavItem>
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchBox className={ this.props.isFocused?'focused':'' }>
						<Search 
							className="focused-input"
							onFocus={this.props.focusHandler}
							onBlur={this.props.blurHandler}>
						</Search>
						<i className="i confont focused-iconfont">&#xe623;</i>
					</SearchBox>
				</Nav>
				<Addtion>
					<Button><i className="iconfont">&#xe6c5;</i>写文章</Button>
					<Button className="write">登陆</Button>
				</Addtion>
			</HeaderStyle>
		)
	}

	// focusHandler=(e)=>{
		// this.setState({
		// 	isFocused: true
		// })
	// }

	// blurHandler=(e)=>{
		// this.setState({
		// 	isFocused: false
		// })
	// }
}
*/ 

const Header =(props) =>{
	return (
			<HeaderStyle>
			<Logo />
			<Nav>
				<NavItem className="left active">首页</NavItem>
				<NavItem className="left">下载App</NavItem>
				<NavItem className="right">登陆</NavItem>
				<NavItem className="right">
					<i className="iconfont">&#xe636;</i>
				</NavItem>
				<SearchBox className={props.isFocused?'focused':'' }>
					<Search 
						className="focused-input"
						onFocus={props.focusHandler}
						onBlur={props.blurHandler}>
					</Search>
					<i className="i confont focused-iconfont">&#xe623;</i>
				</SearchBox>
			</Nav>
			<Addtion>
				<Button><i className="iconfont">&#xe6c5;</i>写文章</Button>
				<Button className="write">登陆</Button>
			</Addtion>
		</HeaderStyle>
	)
}

const mapStateToProps = (state) =>{
	return {
		isFocused: state.header.get('isFocused') // immutable 的写法
	}
}

const mapDispatchToProps =(dispatch) =>{
	return {
		focusHandler(){
			const action = {
				type: 'SEARCH_FOCUS'
			}
			dispatch(action)
		},
		blurHandler(){
			const action = {
				type: 'SEARCH_BLUR'
			}
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)