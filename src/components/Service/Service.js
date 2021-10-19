import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    const { serviceName, description, image, sl } = props.service;
    const url = `/service/${sl}`;
    return (
        <div className="col-lg-4">
            <div className="p-2 m-2 bg-secondary service">
                <img src={image} alt="" />
                <h3>{sl}. {serviceName}</h3>
                <p>{description}</p>
                <Link to={url}>Visit</Link>
            </div>
        </div>
    );
};

export default Service;