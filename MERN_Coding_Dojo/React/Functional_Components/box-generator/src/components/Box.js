import {useState} from 'react';

const Box = props => {

    return(
        <svg width="100" height="100">
            <rect width="100" height="100" fill={props.color}/>
        </svg>
    )
};

export default Box;