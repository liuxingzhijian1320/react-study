import { fromJS } from 'immutable' // 不可更改属性的方法

const defaultState = fromJS({
	detail: {},
	list: []
})

// 纯函数
export default (state=defaultState, action) => {
	// console.info('action',action.detail)
	switch (action.type){
		case 'DETAIL/DETAIL':
			// return state.set('detail', action.detail)
			return state.mergeDeep({
				detail: fromJS(action.detail),
				list: fromJS(action.detail.list)
			})
		default:	
			return state
	}
}