import { createStore, applyMiddleware, compose } from 'redux'

import reducer from './reducer.js'

// 使用2个中间件的写法
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers();

const store = createStore(reducer,enhancer)

export default store;