import React from 'react';
import CardContainer from '../../components/CardContainer/CardContainer';
import './index.css'

const SearchHero = () => {
    return (
        <div>

        <div className='searchContainer'>

            <div className='searchForm'>
                    <label for="hero" className="alkemy-form-label searchLabel">Search your Hero!</label>
                    <input type="text" className="alkemy-form-control hero searchInput" id="hero" placeholder="Type your hero's name" />
                <button type="button" class="alkemy-btn-primary btn-search">Search</button>
            </div>

        </div>

            <CardContainer />
            
        </div>
    );
};

export default SearchHero;