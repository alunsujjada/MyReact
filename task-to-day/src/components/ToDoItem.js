import React, { Component } from 'react';
import Button from './Button'
import '../styles/FormInput.css'
const ToDoItem = ()=>{
    return(
        <div style={todo}>
            <p>Title Item</p>
            <div>
                <Button text="Edit" var ="success"/>
                <Button text="Delete" var="warning"/>
            </div>
        </div>
    )
}

export  default ToDoItem

const todo = {
    background : "#2da4f8",
    color:"#ffffff",
    display:"flex",
    alignItems : "center",
    height:"3rem",
    padding:"0 1rem",
    justifyContent : "space-between",
    margin:"0.5rem 0"
}