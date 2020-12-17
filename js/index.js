import React from 'react';

import ReactDOM from 'react-dom'


/* 
ReactDOM.render(<h1>hej</h1>,document.getElementById('root')) */

import Name from './name'

function Name(){
    return (
        <h1>Jag hetr Medine</h1>
    )
}

function App(){
    return (
        <section>
            <h2>Hello!!</h2>
            <Name />
            <Name />
        </section>
    )
}
ReactDOM.render(<App />,document.getElementById('root')) 