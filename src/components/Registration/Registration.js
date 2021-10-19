import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Registration.css';

const Registration = () => {
    const { handleGoogleSignIn } = useAuth();
    return (
        <div className="container w-50">
            <div>
                <h2>Registration form</h2>
                <form>
                    <input className="form-control m-2" type="text" placeholder="Your Name" />
                    <input className="form-control m-2" type="text" placeholder="Your Address" />
                    <input className="form-control m-2" type="email" name="" id="" placeholder="Your Email" />
                    <input className="form-control m-2" type="password" name="" id="" placeholder="Your Password" />
                    <input className="form-control m-2" type="password" name="" id="" placeholder="Re-enter Password" />
                    <input className="form-control m-2 btn btn-primary" type="submit" value="Registration" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>---------- or ----------</div>
                <button onClick={handleGoogleSignIn} className="btn btn-primary form-control m-2">Sign in with google</button>
            </div>
        </div>
    );
};

export default Registration;