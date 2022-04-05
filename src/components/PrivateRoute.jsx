import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { auth } from '../services/firebase'

const PrivateRoute = ({ children, authenticated }) => {

    // console.log(authenticated);


    return (
        authenticated ? children : <Navigate to='/login' />
    )
}

export default PrivateRoute