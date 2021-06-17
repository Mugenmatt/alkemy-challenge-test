import React from 'react';
import {Redirect} from 'react-router-dom'
import Title from '../../components/Title/Title';
import CardContainer from '../../components/Team/CardContainer/CardContainer'
import './index.css'

const Team = () => {

    const token = window.localStorage.getItem('token');

    if(!token){
        return <Redirect to='/login' />;
    }
    return (
        <div>

            <Title title='My Team' />

            <CardContainer />

            <div className='containerPowerstats' >

                <Title title='Powerstats' />

                <p>El powerstat con mas acumulativo:  </p>
                <p>Suma total Intelligence, strength, etc:  </p>
                <p>Pesos y altura promedio:  </p>

            </div>

        </div>
    );
};

export default Team;