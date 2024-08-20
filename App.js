import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import HomePage from './components/HomePage'; // Make sure this import is correct

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<HomePage />} /> {/* Ensure HomePage is rendered here */}
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
