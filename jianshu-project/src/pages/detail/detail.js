import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import {
	DetailWrapper,
	Header,
	Content
} from './style.js'

class Detail extends Component {
	render(){
		let { detail, list } = this.props
		return (
			<DetailWrapper>
				<Header>{detail.get('title')}</Header>
				<Content>
					<img alt='' className='img' src={detail.get('cover')} />
					{
						list.map((item,index)=>{
							return <p key={index}>{item.get('title')}</p>
						})
					}
				</Content>
			</DetailWrapper>
		)
	}

	componentDidMount(){
		this.props.getDetailHandler()
	}
}


const mapState = (state) =>{
	return {
		detail: state.detail.get('detail') ,
		list: state.detail.get('list')
	}
}
	

const mapDispatch = (dispatch) =>{
	return {
			getDetailHandler(id){
				axios.get('/api/detail.json').then((res)=>{
					const action = {
						type: 'DETAIL/DETAIL',
						detail: res.data.data
					}
					dispatch(action)
				})
			}
	}
}
export default connect(mapState,mapDispatch)(Detail)