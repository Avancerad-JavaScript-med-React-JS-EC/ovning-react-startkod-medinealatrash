import React, { Component } from 'react';

import ReactDOM, { render } from 'react-dom'


/* 
ReactDOM.render(<h1>hej</h1>,document.getElementById('root')) */

//import Name from './name'
import TodoItem from './todoitem.js'
import AddTodo from './addTodo.js'
import Greeting from './basic.js'



class App extends Component{
    constructor(pops){
        super(props);
        this.state = {
            todos: ['köpa kaffe', 'köp kaka', 'brygg kaffe', 'fika'],
            name: 'Pelle'
        }
        //this tappar sin referensnedan och vi  behöver den binda
        this.addItem =this.addItem.bind(this);
    }

    addItem(todo) {
        console.log('add todo: ', todo);
        this.setState((prevState) =>({
            todos: prevState.todos.concat(todo)
        }))

    }
    render(){

        const todoItems = this.state.todos.map((todoItem, index) =>{
            return <TodoItem text={todoItem} key={index} id={index} />
        })

        return (
            <section className = "wrapper">
                
                <Greeting name={this.state.name} />
                
                <h2> {this.props.title}</h2>
                <p> you have {this.state.todos.length} todos</p>
                <ul className="todo-list">
                   {/*  <TodoItem text="köp kaffe" done={false} />
                    <TodoItem text="köp kaka" done={true} />
                    <TodoItem text="brygg kaffe" done={false} />
                    <TodoItem text="köp fika" done={false} /> */}
                    {todoItems}
                </ul>
                {/* här vill vi i vårt AddTodo att den ska prata med index.js */}
                <AddTodo uppdateState={this.addItem}  buttonText="lägg till" />
            </section>
        )
    }
    
}
ReactDOM.render(<App title="Todo" />,document.getElementById('root')) 