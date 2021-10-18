import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Registration.css';

const Registration = () => {
    const { handleGoogleSignIn } = useAuth();
    return (
        <div className="registration">
            <div>
                <h2>Registration: Create an Account</h2>
                <form>
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-enter Password" />
                    <br /><br />
                    <input className="btn btn-primary" type="submit" value="Registration" /><br /><br />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div className="m-5">----------or-------------</div>
                <button onClick={handleGoogleSignIn} className="btn btn-primary m-5">Sign in with google</button>
            </div>
        </div>
    );
};

export default Registration;