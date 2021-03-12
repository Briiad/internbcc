import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
    const token = localStorage.getItem("token");
    const isAuthenticated = token ? true : false;
    return (
        <Route {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/usersignin" />
                )
            }
        />
    );
};

export default PrivateRoute;