import * as types from './actionTypes'

const defaultState = {
	inputValue: '',
	list: []	
}
// reducer 只能接受state，但不是修改state
// 纯函数指的是：给定固定的输入，就一定会有固定的输入，而且不会有任何副作用
// 不能进行ajax newDate() 等异步的操作
export default (state=defaultState, action) => {
	// console.info(state,action)

	switch (action.type) {
		case types.FETCH_TODO_LIST:
			return Object.assign({}, state, {
				list: action.list
			})

		case types.CHANGE_INPUT_VALUE:
			return Object.assign({}, state, {
				inputValue: action.value
			})

		case types.ADD_TODOLIST:
			return Object.assign({}, state, {
				list: [...state.list, state.inputValue],
				inputValue: ''
			})

		case types.DELETE_TODOLIST: 
			const newState = Object.assign({}, state)
			newState.list.splice(action.index, 1)
			return newState

		default:
			return state
	}
}