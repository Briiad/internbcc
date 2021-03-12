import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";

function AuthRoute({ component: Component, ...rest }) {
    const token = localStorage.getItem("token");
    const isAuthenticated = token ? true : false;
    return (
        <Route {...rest}
            render={(props) =>
                !isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/carikerja" />
                )
            }
        />
    );
};

export default AuthRoute