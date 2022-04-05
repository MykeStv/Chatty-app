import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'


const PublicRoute = ({ children, authenticated }) => {

    return (
        !authenticated ? children : <Navigate to='/chat' />
    )
}

export default PublicRoute