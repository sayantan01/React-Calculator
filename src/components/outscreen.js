import React from 'react';
import OutRow from './outrow';
export default (props)=>{
    return(
        <div>
            <OutRow value={props.question} /><br />
            <OutRow value={props.answer} />
        </div>
    );
}