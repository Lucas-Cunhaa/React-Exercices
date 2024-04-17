import React from "react";

const ShowResult = (props) => { 
    const handleShowResult = () => {
        return props.arrayToShow.map((element, index) => (
            <p key={index}>{element}</p>
        ));
    }

    return (
        <div>
            <p>{props.children}</p>
            {handleShowResult()}
        </div>
    );
}

export default ShowResult;
