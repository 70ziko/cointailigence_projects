import React from 'react';
import { render } from '@testing-library/react';
import SevenDayForecast from './SevenDayForecast';

test('renders without crashing', () => {
  const { container } = render(<SevenDayForecast forecastData={null} />);
  expect(container).toBeTruthy();
});

test('renders correct data', () => {
  const forecastData = [
    { date: '2022-01-01', temperature: 20, description: 'Sunny' },
    { date: '2022-01-02', temperature: 22, description: 'Cloudy' },
  ];
  const { getByText } = render(<SevenDayForecast forecastData={forecastData} />);
  expect(getByText('2022-01-01')).toBeTruthy();
  expect(getByText('20°C')).toBeTruthy();
  expect(getByText('Sunny')).toBeTruthy();
  expect(getByText('2022-01-02')).toBeTruthy();
  expect(getByText('22°C')).toBeTruthy();
  expect(getByText('Cloudy')).toBeTruthy();
});
