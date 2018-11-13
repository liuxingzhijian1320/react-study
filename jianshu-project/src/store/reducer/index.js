import { combineReducers } from 'redux'
import header from './header'
import home from './home'

const reducer = combineReducers({
	header,
	home
})

export default reducer