import React from 'react';
export default (props)=>{
    return(
        <input type="text" readOnly value={props.value} />
    );
}