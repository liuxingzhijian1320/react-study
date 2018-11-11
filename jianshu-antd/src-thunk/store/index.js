import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';

import reducer from './reducer.js'

// 使用2个中间件的写法
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(reducer,enhancer)

export default store;