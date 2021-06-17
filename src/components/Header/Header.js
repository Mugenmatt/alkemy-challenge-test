import React, {useContext} from 'react';
import HeroesContext from '../../context/HeroesContext';
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => {
    const context = useContext(HeroesContext);
    const {handleLogout} = context;
    return (
        <>
            <ul className="nav nav-tabs bg-primary menu">
                <li className="nav-item">
                    <Link to='/'>
                        <p className="nav-link">My Team</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/search'>
                        <p className="nav-link">Search your Heroes</p>
                    </Link>
                </li>
                <li className="nav-item">
                    { 
                        window.localStorage.getItem('token') !== null ? <p className="nav-link" onClick={handleLogout}>Log Out</p> 
                        : 
                        <Link to='/login'>
                            <p className="nav-link"> Log In </p>
                        </Link>
                    }
                </li>
            </ul>  
            
        </>
    );
};

export default Header;