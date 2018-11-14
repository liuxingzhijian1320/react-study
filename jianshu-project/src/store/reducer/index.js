import { combineReducers } from 'redux'
import header from './header'
import home from './home'
import detail from './detail'

const reducer = combineReducers({
	header,
	home,
	detail
})

export default reducer