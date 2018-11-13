import { fromJS } from 'immutable' // 不可更改属性的方法

const defaultState = fromJS({
	topicList: [
		{
			id:1,
			title:'社会热点',
			img:'//upload.jianshu.io/collections/images/76/12.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
		},
		{
			id:2,
			title:'故事',
			img:'//upload.jianshu.io/collections/images/95/1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64'
		}
	]
})

// 纯函数
export default (state=defaultState, action) => {
	switch (action.type){
		// case 'SEARCH_FOCUS':
			// return state.set('isFocused', true)
		default:	
			return state
	}
}