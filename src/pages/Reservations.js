import React from 'react';
import BookingForm from '../components/BookingForm';

function Reservations({ availableTimes, dispatch, submitForm }) {
  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default Reservations;