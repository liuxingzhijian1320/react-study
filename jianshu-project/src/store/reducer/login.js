import { fromJS } from 'immutable' // 不可更改属性的方法

const defaultState = fromJS({
	account: '',
	isLogin: false
})

// 纯函数
export default (state=defaultState, action) => {
	// console.info(action.type)
	switch (action.type){
		case 'LOGIN/LOGIN':
			if(action.account){
				return state.merge({
					account: fromJS(action.account),
					isLogin: fromJS(true)
				})
			}
			break
		case 'LOGIN/LOGOUT':
			return 	state.set('isLogin', false)
		default:	
			return state
	}
	
}