import { render, screen } from '@testing-library/react';
import App from '../App';



test('App renders what time is it', () => {
  render(<App />);
  const element = screen.getByTestId("time-label")
  expect(element.textContent).toBe('What Time Is It?');
 
});

test('App renders the time', () => {
  render(<App />);
  const element = screen.getByTestId("time-text-display")
  expect(element.textContent).not.toBe('');
 
});

