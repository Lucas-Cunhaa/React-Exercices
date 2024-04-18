import React, { useEffect } from "react"; 

const AlertResults = (props) => {

useEffect(() => {handleAlertResult()}, [props.myResult])
const handleAlertResult = () => {
    alert(props.myResult)
}
return(
    <p>

    </p>
)
}

export default AlertResults