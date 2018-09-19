import React, { Component, Fragment } from 'react'
import { Transition } from 'react-transition-group'
import './transitions.css' 

class App extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	show: true
    }
  }

	render() {
		return (
				<Fragment>
					<div className={`${this.state.show ? 'show' : 'hide'} animated`}>App</div>
					<button onClick={this.toggleHandler}>toggle</button>
					<br />

					<Transition>
						<div>hello world</div>						
					</Transition>
					<button onClick={this.cssTransionHandler}>cssTransionHandler</button>


				</Fragment>
			)
	}

	toggleHandler=()=>{
		this.setState({
				show: this.state.show ? false : true
		})
	}

	cssTransionHandler=()=>{

	}

}

export default App

