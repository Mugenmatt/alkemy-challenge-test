import React, {useContext} from 'react';
import HeroesContext from '../../context/HeroesContext';
import {Redirect} from 'react-router-dom'
import Title from '../../components/Title/Title';
import Loader from '../../components/Loader/Loader'
import CardContainer from '../../components/Team/CardContainer/CardContainer'
import './index.css'

const Team = () => {

    const token = window.localStorage.getItem('token');
    const context = useContext(HeroesContext);
    const { isFetching, myHeroes } = context;

    const teamPowerstats = [...myHeroes]

    let TeamIntelligence = teamPowerstats.reduce((prev, curHero) => {
        let powerstats;
        if(curHero.powerstats.intelligence === 'null') {
            powerstats = curHero.powerstats.intelligence = 0
        }
        powerstats = Number(curHero.powerstats.intelligence)
        return prev + powerstats;
    }, 0);

    let TeamStrength = teamPowerstats.reduce((prev, curHero) => {
        let powerstats;
        if(curHero.powerstats.strength === 'null') {
            powerstats = curHero.powerstats.strength = 0
        }
        powerstats = Number(curHero.powerstats.strength)
        return prev + powerstats;
      }, 0);

    let TeamSpeed = teamPowerstats.reduce((prev, curHero) => {
    let powerstats;
    if(curHero.powerstats.speed === 'null') {
        powerstats = curHero.powerstats.speed = 0
    }
    powerstats = Number(curHero.powerstats.speed)
    return prev + powerstats;
    }, 0);

    let TeamDurability = teamPowerstats.reduce((prev, curHero) => {
    let powerstats;
    if(curHero.powerstats.durability === 'null') {
        powerstats = curHero.powerstats.durability = 0
    }
    powerstats = Number(curHero.powerstats.durability)
    return prev + powerstats;
    }, 0);

    let TeamPower = teamPowerstats.reduce((prev, curHero) => {
    let powerstats;
    if(curHero.powerstats.power === 'null') {
        powerstats = curHero.powerstats.power = 0
    }
    powerstats = Number(curHero.powerstats.power)
    return prev + powerstats;
    }, 0);

    let TeamCombat = teamPowerstats.reduce((prev, curHero) => {
    let powerstats;
    if(curHero.powerstats.combat === 'null') {
        powerstats = curHero.powerstats.combat = 0
    }
    powerstats = Number(curHero.powerstats.combat)
    return prev + powerstats;
    }, 0);

    const highestPowerstat = Math.max(TeamStrength, TeamCombat, TeamDurability, TeamIntelligence, TeamPower, TeamSpeed)

    if(!token){
        return <Redirect to='/login' />;
    }

    return (
        <div>

            <Title title='My Team' />

            {
                isFetching ? <Loader /> : <CardContainer />
            }

            <div className='containerPowerstats' >

                <Title title='Powerstats' />

                <p className='powerstats'>El powerstat con mas acumulativo: <span className='powerstatsResults'> {highestPowerstat} </span> </p>
                <p className='powerstats'>Total Power: <span className='powerstatsResults'> {TeamPower} </span> </p>
                <p className='powerstats'>Total Durability: <span className='powerstatsResults'> {TeamDurability} </span> </p>
                <p className='powerstats'>Total Strength: <span className='powerstatsResults'> {TeamStrength} </span> </p>
                <p className='powerstats'>Total Intelligence: <span className='powerstatsResults'> {TeamIntelligence} </span> </p>
                <p className='powerstats'>Total Speed: <span className='powerstatsResults'> {TeamSpeed} </span> </p>
                <p className='powerstats'>Total Combat: <span className='powerstatsResults'> {TeamCombat} </span> </p>

            </div>

        </div>
    );
};

export default Team;