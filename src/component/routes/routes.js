import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../authcontext/AuthContext";


// the codes in this fil are from "https://github.com/javascript-repositories/hotel-api-example-site/blob/master/src/components/routes/ProtectedRoute.js"


const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { user } = useContext(AuthContext);

    return <Route {...rest} render={(props) => (user ? <Component {...rest} {...props} /> : <Redirect to="/login" />)} />;
};

export default ProtectedRoute;
