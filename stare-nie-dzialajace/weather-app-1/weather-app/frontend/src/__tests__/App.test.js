import React from 'react';
import { shallow } from 'enzyme';
import WeatherApp from '../App';

describe('WeatherApp', () => {
  it('renders without crashing', () => {
    shallow(<WeatherApp />);
  });
});
