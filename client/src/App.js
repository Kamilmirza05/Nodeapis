import React, { Fragment, useState } from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate }
  from "react-router-dom";

//components

import Register from "./components/Register";
import Login from "./components/Login";
import Dashaboard from './components/Dashboard';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  }
  return (

    <Fragment>
      <Router>
        <div className='container'>
          <Routes>
            <Route exact path="/login" element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} setAuth={setAuth} />
            <Route exact path="/register" element={isAuthenticated ? <Navigate to="/login" /> : <Register />} setAuth={setAuth} />
            <Route exact path="/dashboard" element={!isAuthenticated ? <Navigate to="/login" /> : <Dashaboard />} setAuth={setAuth} />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
