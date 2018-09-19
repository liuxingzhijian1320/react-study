import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './transitions.css' 

class App extends Component {

	constructor(props) {
    super(props);
    this.state = {
    	show: true,
    	cssshow: true,
    	list: []
    }
  }

	render() {
		return (
				<Fragment>
					<div className={`${this.state.show ? 'show' : 'hide'} animated`}>App</div>
					<button onClick={this.toggleHandler}>toggle</button>
					<br />
					<br />
					<br />
					<br />
					<br />

					<CSSTransition
					in={ this.state.cssshow }
					timeout={ 300 }
					classNames="fade"
					unmountOnExit
					onEntered={(el) => {el.style.color = 'red'}}
					appear={ true }
					>
						<div>hello world</div>						
					</CSSTransition>
					<button onClick={this.cssTransionHandler}>cssTransionHandler</button>
					<br />
					<br />
					<br />
					<br />
					<br />

					<ul>
						<TransitionGroup>
							{
	              this.state.list.map((item, index) => {
	                  return (
											<CSSTransition
													key={index}
													timeout={ 300 }
													classNames="fade"
													 unmountOnExit
													onEntered={(el) => {el.style.color = 'red'}}
													appear={ true }
													>
	                    	<li onClick={ this.delHandler.bind(this,index) }>{item}</li>
	                    </CSSTransition>
	                  )
	              })
	            }
	           </TransitionGroup>
					</ul>
					<button onClick={this.additemHandler}>增加数据</button>



				</Fragment>
			)
	}

	toggleHandler=()=>{
		this.setState({
				show: this.state.show ? false : true
		})
	}

	cssTransionHandler=()=>{
		this.setState({
				cssshow: this.state.cssshow ? false : true
		})
	}

	additemHandler=()=>{
		this.setState((prevsState)=>{
			return {
				list: [...prevsState.list, 'item']
			}
		})
	}

	delHandler(index){
		console.info('index',index)

		const list = [...this.state.list];
		list.splice(index,1)
		this.setState(()=>({
			list: list
		}))
	}

}

export default App

