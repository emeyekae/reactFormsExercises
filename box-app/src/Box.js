import React from "react";

function Box({
    id, handleRemove, height=300, width=300,  backgroundColor="purple"
}) 
{ 
    const remove = () => handleRemove(id);
    return (
        <div>
            <div style={{width: `${width}px`, height: `${height}px`, backgroundColor }}/>
            <button onClick={remove}>X</button>
        </div>
    );
}

export default Box;