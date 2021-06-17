import React, {useContext} from 'react';
import {Redirect} from 'react-router-dom'
import HeroesContext from '../../context/HeroesContext';
import CardContainer from '../../components/SearchHero/CardContainer/CardContainer'
import './index.css'
import Loader from '../../components/Loader/Loader'


const SearchHero = () => {
    const token = window.localStorage.getItem('token');
    
    const context = useContext(HeroesContext);

    const {handleSearchHero, handleName, isFetching} = context;

    if(!token){
        return <Redirect to='/login' />;
    }

    return (
        <div className='searchContainer'>

            <div className='formContainer'>

                <div className='searchForm'>
                    <label htmlFor="hero" className="alkemy-form-label searchLabel">Search your Hero!</label>
                    <input type="text" className="alkemy-form-control hero searchInput" id="hero" placeholder="Type your hero's name" onChange={handleName} />
                    <button type="button" className="alkemy-btn-primary btn-search" onClick={handleSearchHero}>Search</button>
                </div>

            </div>
            
            {
                isFetching && <Loader />
            }

            <CardContainer fromSearch={'fromSearch'} />
            
        </div>
    );
};

export default SearchHero;