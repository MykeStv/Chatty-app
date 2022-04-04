import React, { Component } from 'react';
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  render() {
    return this.state.loading === true ? <h2>Loading...</h2> : (
      <Router>
        <Routes>
          <Route exact path="/" component={Home}></Route>
          <PrivateRoute path="/chat" authenticated={this.state.authenticated} component={Chat}></PrivateRoute>
          <PublicRoute path="/signup" authenticated={this.state.authenticated} component={Signup}></PublicRoute>
          <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
        </Routes>
      </Router>
    );
  }

}

export default App;