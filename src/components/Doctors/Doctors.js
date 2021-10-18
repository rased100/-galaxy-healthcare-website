import React from 'react';

const Doctors = () => {
    return (
        <div className="container p-5 ">
            <div className="p-5 bg-secondary rounded">
                <h2 className="text-white">Find Doctor</h2>
                <input className="form-control m-2" type="text" placeholder="Search by Doctor Name" />
                <input className="form-control m-2" type="text" placeholder="Search by Speciality" />
                <input className="form-control m-2" type="text" placeholder="Search by Days" />
                <input className="btn btn-primary" type="submit" value="Search" />
            </div>
        </div>
    );
};

export default Doctors;