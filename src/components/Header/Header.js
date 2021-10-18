import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="bg-info p-4">
            <NavLink className="header-nav" to="/home">Home</NavLink>
            <NavLink className="header-nav" to="/services">Services</NavLink>
            <NavLink className="header-nav" to="/registration">Registration</NavLink>
            <NavLink className="header-nav" to="/login">Login</NavLink>
        </div>
    );
};

export default Header;