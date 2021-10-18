import React from 'react';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const { handleGoogleSignIn } = useAuth();
    return (
        <div>
            <input type="email" placeholder="Your email" />
            <input type="password" placeholder="Your password" />
            <input type="submit" value="Submit" />
            <div>---or---</div>
            <button onClick={handleGoogleSignIn}>Sign in with google</button>
        </div>
    );
};

export default Login;