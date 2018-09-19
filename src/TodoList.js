import React, { Component, Fragment } from 'react' // eslint-disable-line
import TodoItem from './TodoItem'
import Test from './Test'
import axios from 'axios'

// 先引入组件 后引入样式
import './TodoList'
import './TodoList.css'



class TodoList extends React.Component {

    // constructor 也是只会执行一次
    constructor(props) {
        super(props);
        // 当组件的statr和props发生改变的时候，render函数就会执行
        this.state = {
            inputVal: '我是默认数据！！',
            list: [],
            test:'测试'
        };
        this.onChangeHandler = this.onChangeHandler.bind(this)
        this.addHandler = this.addHandler.bind(this)
        this.delHandler = this.delHandler.bind(this)
    }

    // lifeCycle

    // 组件即将被挂载到页面时候执行
    componentWillMount(){
        // console.info('componentWillMount 只执行一次')
    }


    render() {
        console.info('render') 
         // ajax 不能放到这里执行，因为每次的render都会执行的，导致ajax也是每次执行
        return (
            <Fragment>  
                {
                    // 这是注释
                }
                <label htmlFor="test">标签</label>
                <input id="test" defaultValue={ this.state.inputVal } />
                <input value={ this.state.inputVal } 
                       onChange={ this.onChangeHandler } 
                       ref={ (inp)=>{ this.input = inp }}/>
                <button onClick={ this.addHandler }>提交</button>
                <div className="testClass">className</div>
                <ul ref={ (ul) => {this.ul = ul}}>
                {/*
                    {
                        this.state.list.map((v, i) => {
                            return (
                                <li key={v} 
                                index={i} 
                                onClick={this.delHandler.bind(this, i)}
                                dangerouslySetInnerHTML={{__html:v}}
                                ></li>)
                        })
                    }
                */}

                    { this.getTodoItem() }
                </ul>

                <Test content = { this.state.inputVal } />

            </Fragment>
        )
    }

    // 组件被挂载到页面时候执行自动被执行
    componentDidMount(){
        console.info('componentDidMount 只执行一次')
        // 发送ajax的请求
        axios.get('/api/todolist').then(() => {
            alert('fetch success')
        }).catch((err) => {
            alert('fetch err')
        })

    }

    // componentWillReceiveProps(){
    //     console.info('componentWillReceiveProps')
    // }
    
    // componentWillUnmount(){
    //     console.info('child componentWillUnmount')
    // }

    // 组件被更新之前，他会自动被执行
    shouldComponentUpdate(){
        // console.info('shouldComponentUpdate')
        return true
    }

    // 组件被更新之前，他会自动被执行,他在shouldComponentUpdate之后执行
    // 如果shouldComponentUpdate返回true，才执行
    // 如果shouldComponentUpdate返回false，则不执行
    componentWillUpdate(){
        // console.info('componentWillUpdate')
    }

    // 组件更新完成之后才会被执行
    componentDidUpdate(){
        // console.info('componentDidUpdate')
    }



    getTodoItem() {
         return this.state.list.map((v, i) => {
            return  (
                    <TodoItem 
                        key={i} 
                        content={v} 
                        index={i} 
                        del={ this.delHandler } />
                    )
        })
    }

    onChangeHandler(e) {
        // console.info('this', this)
        // console.info('input-value', e.target.value)
        // 老式的写法
        // this.setState({
        //     inputVal: e.target.value
        // })
        const value = e.target.value
        // console.info('ref-dom',this.input)
        // this.setState((e) => {
        //     return {
        //         inputVal: value
        //     }
        // })
        this.setState(() => ({
          inputVal: value
        }))
    }
    addHandler() {
        // this.setState({
        //     inputVal: '',
        //     list: [...this.state.list, this.state.inputVal]
        // })

         this.setState((prevState) => ({
            list:[...prevState.list, prevState.inputVal],
            inputVal:''
         }),()=>{
            // console.info(this.ul.querySelectorAll('div').length)
         } )

         //console.info(this.ul.querySelectorAll('div').length)
         // 出现的数据长度不一样的原因，是setState是异步的，不会立即执行，console已经在执行了,setState的第二参数
         // 是可以的相当于then的方法

    }
    delHandler(i) {
        const list = [...this.state.list];
        list.splice(i, 1)
        this.setState(() => ({
            list: list
        }))
    }
}

export default TodoList;