import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import TripManagement from './components/TripManagament';
import TripHistoryPage from './components/TripHistory';
import UserManagement from './components/UserManagament';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trip-managament" element={<TripManagement />} />
        <Route path="/trip-history" element={<TripHistoryPage />} />
        <Route path="/user-managament" element={<UserManagement />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
