import { fromJS } from 'immutable' // 不可更改属性的方法

const defaultState = fromJS({
	topicList:[],
	articleList:[],
	recommandList:[],
	page:1,
	per_page:3
})

// 纯函数
export default (state=defaultState, action) => {
	switch (action.type){
		case 'HOME/FETCH_HOME_DETAIL':
			return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommandList: fromJS(action.recommandList)
			})
		case 'HOME/LOADMORE_ARTICLE':
			// return state.set('articleList',state.get('articleList').concat(action.result))
			return state.merge({
				articleList: state.get('articleList').concat(action.result),
				page: action.page
			})
		default:	
			return state
	}
}