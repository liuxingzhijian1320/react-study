import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Test extends Component {
	
	// 当父组件的render被执行的时候，子组件的render也将被执行
	render() {
		// console.info('test render')
		return <div>我是Test-component-props => { this.props.content } </div>
	}
}
Test.propTypes = {
	content: PropTypes.string
}

export default Test