import React from 'react';
import {Link} from 'react-router-dom'
import './index.css'
const Header = () => {
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
                        <p className="nav-link">Search a Hero</p>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to='/login'>
                        <p className="nav-link">Log In</p>
                    </Link>
                </li>
            </ul>  
            
        </>
    );
};

export default Header;