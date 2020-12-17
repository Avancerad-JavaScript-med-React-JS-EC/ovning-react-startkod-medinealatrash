import React from 'react';

import ReactDOM from 'react-dom'


/* 
ReactDOM.render(<h1>hej</h1>,document.getElementById('root')) */

import Name from './name'



function App(){
    return (
        <section className = 'wrapper'>
            <h2>Hello!!</h2>
            <Name />
            <Name />
        </section>
    )
}
ReactDOM.render(<App />,document.getElementById('root')) 