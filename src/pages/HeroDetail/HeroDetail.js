import React, {useContext} from 'react';
import './index.css'
import {useHistory} from 'react-router-dom'
import HeroesContext from '../../context/HeroesContext';
import Title from '../../components/Title/Title';

const HeroDetail = () => {

    const context = useContext(HeroesContext)
    const {name, image, powerstats} = context.viewHero;
    console.log(context);
    const {power, durability, strength, speed, intelligence, combat} = powerstats
    const {url} = image;

    const token = window.localStorage.getItem('token');
    let history = useHistory();

    if(!token){
        history.push("/login");
    }
    return (
        <div className='container-card'>
            <Title title='Hero specifications' />
            <div className="alkemy-card" style={{width: '18rem'}}>

                <img className="card-img-top" src={url} alt="Imagen de card"/>

                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Power: {power}</p>
                    <p className="card-text">Durability: {durability}</p>
                    <p className="card-text">Strength: {strength}</p>
                    <p className="card-text">Speed: {speed}</p>
                    <p className="card-text">Intelligence: {intelligence}</p>
                    <p className="card-text">Combat: {combat}</p>
                </div>

            </div>
        </div>
    );
};

export default HeroDetail;