import React from 'react' 
const Input = (props) => {
   
    return ( 
        <>
        <input type= "text" onChange={props.HandleGetTask()}>{props.children}</input> 
        </>
    )
}

export default Input