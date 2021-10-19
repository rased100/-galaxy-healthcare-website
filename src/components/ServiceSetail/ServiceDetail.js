import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { services } = useAuth();
    const { serviceId } = useParams();

    console.log('service2', services[serviceId - 1])
    console.log(serviceId)

    return (
        <div className="container w-50">
            <div className="p-2 m-2 bg-secondary serviceDetail">
                {/* <h2>service details{serviceId}</h2> */}
                <img src={services[serviceId - 1].image} className="img-fluid" alt="" />
                <h2>{services[serviceId - 1].sl}. {services[serviceId - 1].serviceName}</h2>
                <p>{services[serviceId - 1].description}</p>
                <button className="btn btn-danger m-2">Get this service</button>
                <Link to="/services"><button className="btn btn-warning">Back to Services</button></Link>
            </div>
        </div>
    );
};

export default ServiceDetail;