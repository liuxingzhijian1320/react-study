import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import {
	DetailWrapper,
	Header,
	Content
} from './style.js'

class Detail extends Component {
	// constructor(props){
		// super(props);
		// console.info('props', props.match.params.id)
	// }

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
		this.props.getDetailHandler(this.props.match.params.id)
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
				axios.get(`/api/detail.json?id=${id}`).then((res)=>{
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