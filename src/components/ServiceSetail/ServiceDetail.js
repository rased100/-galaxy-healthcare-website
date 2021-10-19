import React from 'react';
import { useParams } from 'react-router';
import useAuth from '../Hooks/useAuth';

const ServiceDetail = () => {
    const { services } = useAuth();
    const { serviceId } = useParams();

    console.log('service2', services[serviceId - 1])
    console.log(serviceId)

    return (
        <div>
            {/* <h2>service details{serviceId}</h2> */}
            <img src={services[serviceId - 1].image} alt="" />
            <h2>{services[serviceId - 1].sl}. {services[serviceId - 1].serviceName}</h2>
            <p>{services[serviceId - 1].description}</p>

        </div>
    );
};

export default ServiceDetail;