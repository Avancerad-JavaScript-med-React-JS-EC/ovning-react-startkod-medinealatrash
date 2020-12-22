import React from 'react';

import ReactDOM from 'react-dom'


/* 
ReactDOM.render(<h1>hej</h1>,document.getElementById('root')) */

//import Name from './name'
import TodoItem from './todoitem.js'



function App(){
    return (
        <section className = "wrapper">
            <h2>ToDo</h2>
            <ul className="todo-list">
                <TodoItem text="köp kaffe" done={false} />
                <TodoItem text="köp kaka" done={true} />
                <TodoItem text="brygg kaffe" done={false} />
                <TodoItem text="köp fika" done={false} />
            </ul>
        </section>
    )
}
ReactDOM.render(<App />,document.getElementById('root')) 