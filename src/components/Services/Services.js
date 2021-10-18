import React from 'react';
import useAuth from '../Hooks/useAuth';
import Service from '../Service/Service';

const Services = () => {
    const { services } = useAuth();
    return (
        <div className="container my-5">
            <h1>Our Services</h1>
            <div className="row">
                {
                    services.map(service => <Service service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;