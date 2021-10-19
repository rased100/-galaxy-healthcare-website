import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div className="bg-info p-4">
            <NavLink className="header-nav" to="/home">Home</NavLink>
            <NavLink className="header-nav" to="/about">About</NavLink>
            <NavLink className="header-nav" to="/services">Services</NavLink>
            {/* <NavLink className="header-nav" to="/registration">Registration</NavLink> */}
            <NavLink className="header-nav" to="/doctors">Doctors</NavLink>
            <NavLink className="header-nav" to="/contact">Contact</NavLink>

            {user?.displayName ?
                <span>
                    <span>
                        Profile Name: {user.displayName}
                    </span>
                    <span className="mx-2">
                        <img src={user.photoURL} className="rounded-circle photo" alt="" />
                    </span>
                    <span>
                        <button onClick={logOut} className="btn btn-danger">Logout</button>
                    </span>
                </span>

                :
                <NavLink className="header-nav" to="/login">Login</NavLink>
            }

        </div>
    );
};

export default Header;