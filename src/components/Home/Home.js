import React from 'react';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="home">
                <div className="name">
                    <h1>Galaxy Diagnostic Centre</h1>
                </div>
            </div>
            <Services></Services>
        </div>
    );
};

export default Home;