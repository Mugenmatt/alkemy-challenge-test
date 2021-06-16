import React from 'react';
import './index.css';
import Card from '../Card/Card';

const CardContainer = () => {
    return (
        <div className='container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
        </div>
    );
};

export default CardContainer;