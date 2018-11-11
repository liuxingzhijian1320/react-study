import React, { Component } from 'react'
// import axios from 'axios'
import { Input, Button, List } from 'antd';

import 'antd/dist/antd.css';
	
import store from './store'	
import { fetchTodoList, getInputValueAction, getAddAction, getDeleteAction } from './store/actionCreators'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = store.getState()
    store.subscribe(this.storeChangeHandler)
  }

	render() {
		return (
				<div>
					<Input placeholder="请输入内容" 
						value={this.state.inputValue} 
						style={{width:300}} 
						onChange={this.getInputValueHandler}/>
						
					<Button type="Primary" onClick={this.addHandler}>ADD</Button>

			   	<List
			   		style= {{width:'300px'}}
			      bordered
			      dataSource={this.state.list}
			      renderItem={(item,index) => (
			      	<List.Item onClick={this.delHandler.bind(this,index)}>{item}</List.Item>
			      )}/>
				</div>
		)
	}
	// ajax的请求
	componentDidMount() {
		const action = fetchTodoList()
		store.dispatch(action)
		// axios.get('https://www.easy-mock.com/mock/59d78cd99d342f449f2fec24/api/table').then((res)=>{
		// 	console.info(res.data.data)
		// 	store.dispatch(getFetchListAction(res.data.data))
		// }) 
	}

	getInputValueHandler=(e)=>{
		const action = getInputValueAction(e.target.value)
		store.dispatch(action)
	}

	addHandler=()=> {
    const action = getAddAction()
    store.dispatch(action)
	}

	delHandler(index){
		const action = getDeleteAction(index)
		store.dispatch(action)
	}

	// 事件监听器 
	storeChangeHandler =()=>{
		this.setState(store.getState())
	}
}

export default TodoList


