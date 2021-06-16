import React from 'react';
import {Link} from 'react-router-dom'
import './index.css'
const Header = () => {
    return (
        <>
            <ul class="nav nav-tabs bg-primary menu">
                <li class="nav-item">
                    <Link to='/'>
                        <a class="nav-link">My Team</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to='/search'>
                        <a class="nav-link">Search a Hero</a>
                    </Link>
                </li>
                <li class="nav-item">
                    <Link to='/login'>
                        <a class="nav-link">Login</a>
                    </Link>
                </li>
            </ul>  
            
        </>
    );
};

export default Header;