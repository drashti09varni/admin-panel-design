// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Table from './components/Table';
import Form from './components/Form';
import Login from './pages/Login';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in from browser storage on app initialization
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Layout><Dashboard /></Layout> : <Navigate to="/" />}
        />
        <Route
          path="/table"
          element={isLoggedIn ? <Layout><Table /></Layout> : <Navigate to="/" />}
        />
        <Route
          path="/form"
          element={isLoggedIn ? <Layout><Form /></Layout> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
