import React, {useContext} from 'react';
import HeroesContext from '../../../context/HeroesContext';
import './index.css';
import Card from '../../Card/Card';

const CardContainer = () => {
    const heroes = useContext(HeroesContext);
    return (
        <>

            {
                heroes.myHeroes.length === 0 && <h1 className='noHeroesYet'>You have no heroes selected yet !</h1>
            }

            <div className='containerTeam'>

                {
                    heroes.myHeroes.map(hero => {
                        return <Card 
                            key={hero.id}
                            id={hero.id}
                            name={hero.name}
                            img={hero.image.url}
                            powerstats={hero.powerstats}
                        />
                    })
                }
            </div>
        </>
    );
};

export default CardContainer;