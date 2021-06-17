import React from 'react';
import './index.css'

const Error = ({errorTxt}) => {
    return <p className='error'>{errorTxt}</p>;
};

export default Error;