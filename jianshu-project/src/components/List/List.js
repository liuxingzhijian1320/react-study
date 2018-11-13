import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import {
	ListItem,
	ListInfo,
	ListBottom
} from './style.js'
class List extends Component {
	render() {

		return (
			<div>
				{
					this.props.articleList.map((item,index)=>{
						return (
							<ListItem key={index}>
								<img className="img" alt='' src={item.get('img')} />
								<ListInfo>
									<h3 className='h3'>{item.get('title')}</h3>
									<div className='info'>{item.get('info')}</div>
								</ListInfo>
								<ListBottom>
									<i className="name">{item.get('name')}</i>
									<i className="iconfont icon">&#xe606;</i>
									<i className="value">{item.get('msg')}</i>
									<i className="iconfont icon">&#xe653;</i>
									<i className="value">{item.get('likes')}</i>
									<i className="iconfont icon">&#xe601;</i>
									<i className="value">{item.get('money')}</i>
								</ListBottom>
							</ListItem>
						)
					})
				}
			</div>
		)


	}
}
const mapStateToProps = (state) =>{
	return {
		articleList: state.home.get('articleList')
	}
}

export default connect(mapStateToProps, null)(List)