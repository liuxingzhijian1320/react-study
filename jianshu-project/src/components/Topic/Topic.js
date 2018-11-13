import React ,{ Component } from 'react'
import { connect } from 'react-redux'

import {
	TopicWrapper,
	TopicItem
} from './style.js'

class Topic extends Component {
	render() {
		return (
			<TopicWrapper>
				{this.props.topicList.map((item,index)=>{
					return (
						<TopicItem key={item.get('id')}>
							<img className="img" alt='' src={item.get('img')} />
							<div className="name">{item.get('title')}</div>
						</TopicItem>
					)
				})}
			</TopicWrapper>
		)
	}
}

const mapStateToProps = (state) =>{
	return {
		topicList: state.home.get('topicList')
	}
}

export default connect(mapStateToProps, null)(Topic)