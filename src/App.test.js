import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import BookingForm from './components/BookingForm';

test('Renders the BookingForm heading', () => {
  render(
    <BrowserRouter>
      <BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={() => {}} />
    </BrowserRouter>
  );
  const headingElement = screen.getByText('Reserve a Table');
  expect(headingElement).toBeInTheDocument();
});

test('Submit button is disabled until required fields are filled', () => {
  render(
    <BrowserRouter>
      <BookingForm availableTimes={['17:00', '18:00']} dispatch={() => {}} submitForm={() => {}} />
    </BrowserRouter>
  );
  const button = screen.getByLabelText('Submit booking');
  expect(button).toBeDisabled();

  fireEvent.change(screen.getByLabelText('Choose date'), { target: { value: '2026-08-10' } });
  fireEvent.change(screen.getByLabelText('Choose time'), { target: { value: '17:00' } });

  expect(button).not.toBeDisabled();
});