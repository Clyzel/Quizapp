import { render, screen } from '@testing-library/react';
import App from './App';


test("renders Quiz title", () => {
  render(<App />);
  const titleElement = screen.getByText(/History Quiz/);
  expect(titleElement);
});