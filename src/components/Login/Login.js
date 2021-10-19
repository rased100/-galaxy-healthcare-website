import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const { handleGoogleSignIn } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectUrl = location.state?.from || '/home';

    const handleGoogleSignInHistory = () => {
        handleGoogleSignIn()
            .then((result) => {
                history.push(redirectUrl);
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="container w-25">
            <input className="form-control m-2 mt-5" type="email" placeholder="Your email" />
            <input className="form-control m-2" type="password" placeholder="Your password" />
            <input className="btn btn-primary form-control m-2" type="submit" value="Submit" />
            <p>Don't have an account? <Link to="/registration">Register</Link></p>
            <div className="m-5">------ or ------</div>
            <button onClick={handleGoogleSignInHistory} className="btn btn-primary form-control m-2 mb-5">Sign in with google</button>
        </div>
    );
};

export default Login;