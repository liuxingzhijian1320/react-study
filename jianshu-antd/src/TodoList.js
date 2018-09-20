import React, { Component } from 'react'

import 'antd/dist/antd.css';

import { Input, Button, List } from 'antd';


class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
    	list: [1,2],
    	inputValue :'我是默认数据'
    }
  }

	render() {
		return (
				<div>
			
					<Input placeholder="请输入内容" 
						value={this.state.inputValue} 
						style={{width:300}} 
						onChange={this.getInputValueHandler}/>
						
					<Button type="Primary" onClick={ this.addHandler }>ADD</Button>

			   	<List
			   		style= {{width:'300px'}}
			      bordered
			      dataSource={this.state.list}
			      renderItem={item => (<List.Item>{item}</List.Item>)}
		    	/>
		    
				</div>
		)
	}

	getInputValueHandler=(e)=>{
		console.info(33,e.target.value)
		 const value = e.target.value
		 this.setState(() => ({
          inputValue: value
     }))

	}

	addHandler=()=> {
		 console.info(this.state)
     this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
     }))
	}

}

export default TodoList


