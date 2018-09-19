import React , { Component } from 'react'
import PropTypes from 'prop-types';


class TodoItem extends Component{
	 constructor(props) {
        super(props);
        this.delHandler = this.delHandler.bind(this)
    }

   // 性能体验
   // 由于父组件每次更细出发render的，state的也是更改，导致props发生了改变
   // 引起子组件render的触发，每次这样的都是非常消耗性能
  shouldComponentUpdate(nextProps,nextState) {
  	if(nextProps.content !== this.props.content){
  		return true
  	}else {
  		return false;
  	}
  }

	render() {
		console.info('child render')
		const { content, test }  = this.props;
		return (
				<div onClick={this.delHandler}>
					{ test } - { content }
				</div>
			)
	}

	// 当一个组件从父组件接受了参数
	// 如果这个组件第一次就存在父组件中，则不会执行
	// 如果这个组件已经存在父组件中，会执行
	componentWillReceiveProps(){
      // console.info('child componentWillReceiveProps')
  }

  // 当这个组件即将从页面删除的时候执行
  componentWillUnmount(){
  	// console.info('child componentWillUnmount')
  }





	delHandler() {
		const { del,index} = this.props;

		del(index)
	}
}

// 数据校验
TodoItem.propTypes = {
	test:PropTypes.string.isRequired,
	content:PropTypes.string,
	del:PropTypes.func,
	index:PropTypes.number
}

TodoItem.defaultProps = {
	test:'hello world'
}

export default TodoItem