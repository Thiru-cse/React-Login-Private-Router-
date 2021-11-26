import React from 'react'
import { Redirect, Route } from 'react-router'

function PrivateRoute({ path, component: Component }) {
    return (
        <Route
        path={path}
        render={() => {
            const isLoggedIn = localStorage.getItem("isLoggedIn");
            return isLoggedIn ? <Component /> : <Redirect to="/Login" />
        }}
        />
    )
}

export default  PrivateRoute