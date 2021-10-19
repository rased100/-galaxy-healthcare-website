import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useAuth();
    console.log(user)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user?.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        ></Route>
    );
};

export default PrivateRoute;