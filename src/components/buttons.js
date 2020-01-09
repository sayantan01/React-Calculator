import React from 'react';
export default (props)=>{
    return(
        <input type="button" onClick={props.handleClick} value={props.value}  />
    );
}