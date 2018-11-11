import React, { Component } from 'react'
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
class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			isFocused: false
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
					<SearchBox className={ this.state.isFocused?'focused':'' }>
						<Search 
							className="focused-input"
							onFocus={this.focusHandler}
							onBlur={this.blurHandler}>
						</Search>
						<i className="iconfont focused-iconfont">&#xe623;</i>
					</SearchBox>
				</Nav>
				<Addtion>
					<Button><i className="iconfont">&#xe6c5;</i>写文章</Button>
					<Button className="write">登陆</Button>
				</Addtion>
			</HeaderStyle>
		)
	}

	focusHandler=(e)=>{
		this.setState({
			isFocused: true
		})
	}

	blurHandler=(e)=>{
		this.setState({
			isFocused: false
		})
	}
}
export default Header