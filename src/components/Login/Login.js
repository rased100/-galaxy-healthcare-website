import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const { handleGoogleSignIn } = useAuth();
    return (
        <div>
            <input className="mt-5" type="email" placeholder="Your email" /><br />
            <input type="password" placeholder="Your password" /><br /><br />
            <input className="btn btn-primary" type="submit" value="Submit" /><br /><br />
            <p>Don't have an account? <Link to="/registration">Register</Link></p>
            <div className="m-5">------ or ------</div>
            <button onClick={handleGoogleSignIn} className="btn btn-primary m-5">Sign in with google</button>
        </div>
    );
};

export default Login;