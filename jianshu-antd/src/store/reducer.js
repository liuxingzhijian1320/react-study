import * as types from './actionTypes'

const defaultState = {
	inputValue: '',
	list: ['redux', 'react']	
}
// reducer 只能接受state，但不是修改state
export default (state=defaultState, action) => {
	// console.info(state,action)
	switch (action.type) {
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