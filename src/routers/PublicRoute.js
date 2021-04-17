import React from 'react'
import { Redirect, Route } from 'react-router'
import PropTypes from 'prop-types'

export const PublicRoute = ({
    component: Component,
    isLoggedIn,
    ...rest
}) => {
    return (
        <Route {...rest}
            component={ (props) => (
                (!isLoggedIn) ?
                (<Component {...props}/>) :
                (<Redirect to="/"/>)
            )}
        />
    )
}

PublicRoute.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}