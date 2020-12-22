import React, { Component } from 'react';

class Greeting extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){

        return(
            <section>
                <h1>Hej! {this.props.name} </h1>
            </section>
        )
    }



}
export default Greeting;