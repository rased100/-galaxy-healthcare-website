import React from 'react';
import './Service.css';
const Service = (props) => {
    const { serviceName, description, image } = props.service;
    return (
        <div className="col-lg-4">
            <div className="p-2 m-2 bg-secondary service">
                <img src={image} alt="" />
                <h3>{serviceName}</h3>
                <p>{description}</p>
                <button className="btn btn-primary">Get Service</button>
            </div>
        </div>
    );
};

export default Service;