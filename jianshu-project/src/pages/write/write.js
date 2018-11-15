import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
	WriteWrapper,
} from './style.js'

class Login extends Component {
	render(){
		const { isLogin } = this.props;
		console.info('isLogin' ,isLogin )
		if(isLogin){
			return (
				<WriteWrapper>
					写文章
				</WriteWrapper>
			)
		}else {
			return <Redirect to='/login'></Redirect>
		}
			
	}
}

const mapState = (state) =>{
	return {
		isLogin: state.login.get('isLogin')
	}
}


export default connect(mapState,null)(Login)