import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LocationSearch from './LocationSearch';

test('renders without crashing', () => {
  const { container } = render(<LocationSearch onLocationSelect={() => {}} />);
  expect(container).toBeTruthy();
});

test('calls onLocationSelect prop when location is selected', () => {
  const handleLocationSelect = jest.fn();
  const { getByPlaceholderText } = render(<LocationSearch onLocationSelect={handleLocationSelect} />);
  const input = getByPlaceholderText('Enter a location');
  fireEvent.change(input, { target: { value: 'New York' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
  expect(handleLocationSelect).toHaveBeenCalledWith('New York');
});
