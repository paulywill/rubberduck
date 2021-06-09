import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Duck Home header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Duck Home/i);
  expect(headerElement).toBeInTheDocument();
});
