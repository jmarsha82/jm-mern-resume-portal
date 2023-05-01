import { render, screen } from '@testing-library/react';
import App from './App';

it('renders resume name', () => {
  render(<App />);
  expect(screen.getByText('Justin Marshall')).toBeInTheDocument();
});