import React ,{ Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { fromJS } from 'immutable'

import {
	ListItem,
	ListInfo,
	ListBottom,
	LoadMore
} from './style.js'
class List extends Component {
	render() {
		let { articleList, getMorelist, page, per_page } = this.props;
		return (
			<div>
				{
					articleList.map((item,index)=>{
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
				<LoadMore onClick={()=>getMorelist(page,per_page)}>更多文字</LoadMore>
			</div>
		)


	}
}
const mapStateToProps = (state) =>{
	return {
		// articleList: state.getIn(['home','articleList'])
		articleList: state.home.get('articleList'),
		page: state.home.get('page'),
		per_page: state.home.get('per_page')
	}
}

const mapDispatch = (dispatch) => {
	return {
		getMorelist(page, per_page){
			axios.get(`/api/homemore.json?page=${page}&per_page=${per_page}`).then(res=>{
				const result = res.data.data.articleList
				const action = {
					type: 'HOME/LOADMORE_ARTICLE',
					result: fromJS(result),
					page: page+1
				}
				dispatch(action)
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatch)(List)