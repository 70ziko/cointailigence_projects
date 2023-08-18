import React from 'react';
import { shallow } from 'enzyme';
import WeatherDisplay from '../WeatherDisplay';

describe('WeatherDisplay', () => {
  it('renders without crashing', () => {
    shallow(<WeatherDisplay city="London" />);
  });
});
