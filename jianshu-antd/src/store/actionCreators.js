import * as types from './actionTypes'

export const getFetchListAction = (list) => ({
		type: types.FETCH_TODO_LIST,
		list 
})

export const getInputValueAction = (value) => ({
		type: types.CHANGE_INPUT_VALUE,
		value 
})

export const getAddAction = () => ({
		type: types.ADD_TODOLIST,
})

export const getDeleteAction = (index) => ({
		type: types.DELETE_TODOLIST,
		index
})