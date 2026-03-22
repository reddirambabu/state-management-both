import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders add user button and header', () => {
  render(<App />);
  // the header text is defined in Header component
  expect(screen.getByText(/react ts \+ mui/i)).toBeInTheDocument();
  // button created in App
  expect(screen.getByRole('button', { name: /add new user/i })).toBeInTheDocument();
});
