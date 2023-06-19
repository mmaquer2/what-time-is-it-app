import { render, screen } from '@testing-library/react';
import App from '../App';



test('App renders what time is it text', () => {
  render(<App />);
  const element = screen.getByTestId("time-label")
  expect(element.textContent).toBe('What Time is it?');
 
});

test('App renders the time', () => {
 
  const element = screen.getByTestId("time-text-display")
  expect(element.textContent).toBeValid();
 
});

