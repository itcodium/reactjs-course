import React from 'react';
import { Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import LoginService from './LoginService';
const PrivateRoute = ({ component, ...rest }) => (
    <Route {...rest} render={(props) => (
        LoginService.isLoggedIn() ? (
            React.createElement(component, props)
        ) : (
                <Redirect to={{
                    pathname: '/Login',
                    state: { from: props.location },
                }} />
            )
    )} />
)
export default PrivateRoute;