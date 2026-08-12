import React from 'react';
import { Link } from 'react-router-dom';

function ConfirmedBooking() {
  return (
    <main className="confirmed-booking">
      <h2>Booking Confirmed!</h2>
      <p>Thank you for reserving a table with Little Lemon. We look forward to seeing you.</p>
      <Link to="/">
        <button className="btn-primary">Back to Home</button>
      </Link>
    </main>
  );
}

export default ConfirmedBooking;