import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Reservations from './pages/Reservations';
import Order from './pages/Order';
import Login from './pages/Login';
import ConfirmedBooking from './components/ConfirmedBooking';

import { fetchAPI } from './apiFunctions';
import './App.css';

export const initializeTimes = () => {
  return fetchAPI(new Date());
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(new Date(action.date));
    default:
      return state;
  }
};

function App() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = (formData) => {
    setIsSubmitted(true);
    console.log('Booking submitted:', formData);
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route
            path="/reservations"
            element={
              <Reservations
                availableTimes={availableTimes}
                dispatch={dispatch}
                submitForm={submitForm}
              />
            }
          />
          <Route
            path="/confirmed"
            element={<ConfirmedBooking />}
          />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
