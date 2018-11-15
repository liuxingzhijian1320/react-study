import { combineReducers } from 'redux'
import header from './header'
import home from './home'
import detail from './detail'
import login from './login'

const reducer = combineReducers({
	header,
	home,
	detail,
	login
})

export default reducer