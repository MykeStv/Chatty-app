import React from 'react'

const PublicRoute = ({ component: Component, authenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => authenticated === false
                ? <Component {...props} />
                : <Redirect to='/chat' />}
        />
    )
}

export default PublicRoute