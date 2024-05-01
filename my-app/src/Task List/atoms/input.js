import React from 'react' 
const Input = ({ onChange, value }) => {
    return ( 
        <input type= "text" onChange={onChange} value={value}></input> 
    )
}

export default Input