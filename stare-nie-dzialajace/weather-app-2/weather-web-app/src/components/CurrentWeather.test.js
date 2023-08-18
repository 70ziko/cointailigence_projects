import React from 'react';
import { render } from '@testing-library/react';
import CurrentWeather from './CurrentWeather';

test('renders without crashing', () => {
  const { container } = render(<CurrentWeather weatherData={null} />);
  expect(container).toBeTruthy();
});

test('renders correct data', () => {
  const weatherData = { temperature: 20, description: 'Sunny' };
  const { getByText } = render(<CurrentWeather weatherData={weatherData} />);
  expect(getByText('20°C')).toBeTruthy();
  expect(getByText('Sunny')).toBeTruthy();
});
