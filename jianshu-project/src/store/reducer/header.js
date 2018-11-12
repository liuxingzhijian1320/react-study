import { fromJS } from 'immutable' // 不可更改属性的方法

const defaultState = fromJS({
	isFocused: false
})

// 纯函数
export default (state=defaultState, action) => {
	// console.info(action.type)
	switch (action.type){
		case 'SEARCH_FOCUS':
		// immutable的对象set的方法，会结合之前的immutable对象的值和设置的值，返回一个全新的对象
			return state.set('isFocused', true)
		case 'SEARCH_BLUR':
			return state.set('isFocused', false)
		default:	
			return state
	}
	
}