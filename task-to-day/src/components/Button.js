import React from 'react';
import '../styles/Button.css'
const Button = (props) =>{
    return(
        <button className={`btn btn-${props.var}`}>
            {props.text}
        </button>
    )
}

Button.defaultProps = {
    text : "Button"
}
export default Button