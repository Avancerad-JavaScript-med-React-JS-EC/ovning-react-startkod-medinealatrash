import React, { Component } from 'react';


class AddTodo extends Component{
    constructor(props){
        super(props);
        
        }
    
       

    render(){
        const handeleKeyUp=(event) =>{
            if (event.key == 'Enter'){
                this.props.uppdateState(event.target.value);
                console.log('du tryckte på Enter', event.target.value);
            }
        }

        return(
            <section>
                <input onKeyUp={handeleKeyUp} type="text" placeholder="skriv en todo" />
               {/*  <button  > {this.props.buttonText}</button> */}
            </section>
        )
    }
}
export default AddTodo;