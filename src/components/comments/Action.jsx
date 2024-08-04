import React from "react";

// Reusable Action component that renders a clickable div with custom type, class, and click handler.
const Action =({handleClick,type,className})=>{
    return <div className={className} onClick={handleClick}>{type}</div>
}


export default Action;