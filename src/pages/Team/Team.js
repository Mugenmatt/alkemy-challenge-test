import React from 'react';
import Title from '../../components/Title/Title';
import CardContainer from '../../components/CardContainer/CardContainer'
import './index.css'

const Team = () => {
    return (
        <div>

            <Title title='My Team' />

            <CardContainer />
            
            <div className='containerPowerstats' >

                <Title title='Powerstats' />

                <p>Powerstats:</p>
                <p>Powerstats:</p>
                <p>Powerstats:</p>
                <p>Powerstats:</p>
                <p>Powerstats:</p>

            </div>

        </div>
    );
};

export default Team;