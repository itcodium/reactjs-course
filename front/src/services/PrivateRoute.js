import React from 'react';
import { Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'

const PrivateRoute = ({ component, ...rest }) => {
    const { login } = useSelector(state => state)
    return <Route {...rest} render={(props) => {
        if (login.payload) {
            return React.createElement(component, props);
        }
        else {
            return <Redirect to={{
                pathname: '/Login',
                state: { from: props.location },
            }} />
        }
    }} />
}
export default PrivateRoute;
