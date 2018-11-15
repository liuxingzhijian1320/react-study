import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
// import axios from 'axios'

import {
	LoginWrapper,
	LoginBox,
	Input,
	Button
} from './style.js'

class Login extends Component {
	render(){
		const { isLogin } = this.props;
		if(!isLogin){
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder='请输入账号' innerRef={(value)=>{this.account=value}} />
						<Input placeholder='请输入密码' type='password' innerRef={(value)=>{this.password=value}} />
						<Button onClick={()=>this.props.loginHandler(this.account,this.password)}>登陆</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else {
			return <Redirect to='/'></Redirect>
		}
			
	}
}

const mapState = (state) =>{
	return {
		isLogin: state.login.get('isLogin')
	}
}

const mapDispatch = (dispatch) =>{
	return {
			loginHandler(account, password){
				// console.info(account.value, password.value)
				if(!account.value){
					alert('请输入账号')
					return;
				}else if(!password.value){
					alert('请输入姓名')
					return;
				}
				const action = {
					type:'LOGIN/LOGIN',
					account: account.value
				}
				dispatch(action)
			}
	}
}
export default connect(mapState,mapDispatch)(Login)