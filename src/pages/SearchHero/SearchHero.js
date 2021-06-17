import React, {useState, useContext} from 'react';
import HeroesContext from '../../context/HeroesContext';
import CardContainer from '../../components/SearchHero/CardContainer/CardContainer'
import './index.css'

const SearchHero = () => {

    const context = useContext(HeroesContext);

    const {handleSearchHero, handleName} = context;

    return (
        <div className='searchContainer'>

            <div className='formContainer'>

                <div className='searchForm'>
                    <label htmlFor="hero" className="alkemy-form-label searchLabel">Search your Hero!</label>
                    <input type="text" className="alkemy-form-control hero searchInput" id="hero" placeholder="Type your hero's name" onChange={handleName} />
                    <button type="button" className="alkemy-btn-primary btn-search" onClick={handleSearchHero}>Search</button>
                </div>

            </div>

            <CardContainer fromSearch={'fromSearch'} />
            
        </div>
    );
};

export default SearchHero;