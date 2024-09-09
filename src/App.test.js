import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Rewards Program', () => {
  render(<App />);
  const linkElement = screen.getByText(/Rewards Program/i);
  expect(linkElement).toBeInTheDocument();
});