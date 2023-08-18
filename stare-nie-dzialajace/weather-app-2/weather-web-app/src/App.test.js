import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  const { container } = render(<App />);
  expect(container).toBeTruthy();
});

test('renders LocationSearch, CurrentWeather, and SevenDayForecast components', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('location-search')).toBeTruthy();
  expect(getByTestId('current-weather')).toBeTruthy();
  expect(getByTestId('seven-day-forecast')).toBeTruthy();
});
