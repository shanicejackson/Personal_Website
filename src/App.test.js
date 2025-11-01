import { render, screen } from '@testing-library/react';
import App from './App';

test("renders the site's heading", () => {
  render(<App />);
  const heading = screen.getByText(/Shanice's Website/i);
  expect(heading).toBeInTheDocument();
});
