import React, { Component } from 'react';
import Button from './Button';
class FormInput extends Component {
    
    render() { 
        return (  
            <form style={inputForm}>
                <input 
                    type="text"
                    style={input}
                    placeholder="Add your task here "
                />
                <Button text="Add" var="primary"/>
                
            </form>
        );
    }
}
 
export default FormInput;

const inputForm = {
    background : "white",
    display:"flex",
    alignItems : "center",
    height:"3rem",
    padding:"0 1rem",
    justifyContent : "space-between",
    margin:"0.5rem 0"
}

const input = {
    width : "70%",
    border:"none"
}