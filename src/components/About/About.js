import React from 'react';

const About = () => {
    return (
        <div>
            <h1>Welcome to Galaxy Diagnostics Center</h1>
            <div className="container row m-5">
                <div className="col-6">
                    <h2>Our Vision</h2>
                    <p>Through the combination of scientific leadership, market leading technology and talented people, we will create an iconic Radiology, Fetal medicine and pathology practice and be the service of choice.</p>
                    <br />
                    <h2>Our Mission</h2>
                    <p>Our Mission is to empower decision making that saves and improves our patient’s lives.</p>
                </div>
                <div className="col-6">
                    <img className="img-fluid m-3 rounded" src="https://neptunediagnostics.in/wp-content/uploads/2019/01/body-Ultrasound-2048x1536.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;