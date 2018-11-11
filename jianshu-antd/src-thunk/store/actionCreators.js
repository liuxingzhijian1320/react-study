import * as types from './actionTypes'
import axios from 'axios'

const getFetchListAction = (list) => ({
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

// fetch todolist
export const fetchTodoList = () => {
	return (dispatch) => {
		axios.get('https://www.easy-mock.com/mock/59d78cd99d342f449f2fec24/api/table').then((res)=>{
 			dispatch(getFetchListAction(res.data.data))
		}) 
	}
}