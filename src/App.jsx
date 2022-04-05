import React, { useEffect, useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Redirect,
} from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Signup from './pages/Signup';
import Login from './pages/Login';
import { auth } from './services/firebase';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { onAuthStateChanged } from 'firebase/auth';



const App = () => {

  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true) //just shows the loading while awaits async methods

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (user) {
        setAuthenticated(true)
        setLoading(false)

        const uid = user.uid
        console.log(uid);

      } else {
        setAuthenticated(false)
        setLoading(false)
      }

    })
  }, [])

  return (
    <>
      {loading === true ? <h2>Loading...</h2> : (
        <Router>

          <Routes>

            <Route exact path='/' element={<Home />} />
            <Route path='/signup' element={
              <PublicRoute authenticated={authenticated}>
                <Signup />
              </PublicRoute>
            }
            />
            <Route path='/login' element={
              <PublicRoute authenticated={authenticated}>
                <Login />
              </PublicRoute>
            }
            />

            <Route
              path='/chat'
              element={
                <PrivateRoute authenticated={authenticated}>
                  <Chat />
                </PrivateRoute>
              }
            />
          </Routes>

        </Router>
      )}

    </>
  )
}

export default App;



