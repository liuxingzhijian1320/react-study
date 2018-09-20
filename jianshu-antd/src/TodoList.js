import React, { Component } from 'react'
import { Input, Button, List } from 'antd';

import 'antd/dist/antd.css';
	
import store from './store'	



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

	getInputValueHandler=(e)=>{

		const action = {
			type: 'CHANGE_INPUT_VALUE',
			value: e.target.value
		}
		store.dispatch(action)
	}

	addHandler=()=> {
    const action = {
			type: 'ADD_TODOLIST',
		}
		store.dispatch(action)
	}

	delHandler(index){
		console.info('index',index)
		const action = {
			type: 'DELETE_TODOLIST',
			index: index
		}
		store.dispatch(action)
	}

	// 事件监听器 
	storeChangeHandler =()=>{
		this.setState(store.getState())
	}
}

export default TodoList


