import React, {useContext} from 'react';
import HeroesContext from '../../../context/HeroesContext';
import './index.css';
import Card from '../../Card/Card';

const CardContainer = ({fromSearch}) => {

    const heroes = useContext(HeroesContext);

    return (
        <div className='containerSearch'>
            {
                heroes.allHeroes.map(hero => {
                    return <Card 
                        key={hero.id}
                        id={hero.id}
                        name={hero.name}
                        img={hero.image.url}
                        powerstats={hero.powerstats}
                        fromSearch={fromSearch}
                    />
                })
            }
        </div>
    );
};

export default CardContainer;