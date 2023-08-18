import React from 'react';
import WeatherService from '../services/WeatherService';

class LocationSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      selectedLocation: ''
    };
    this.weatherService = new WeatherService();
  }

  handleSearch(event) {
    const location = event.target.value;
    if (location) {
      this.weatherService.searchLocations(location)
        .then(results => {
          this.setState({ searchResults: results });
        });
    }
  }

  handleSelect(location) {
    this.setState({ selectedLocation: location });
    this.props.onLocationSelect(location);
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleSearch.bind(this)} placeholder="Search for a location..." />
        <select onChange={event => this.handleSelect(event.target.value)}>
          {this.state.searchResults.map((location, index) =>
            <option key={index} value={location}>{location}</option>
          )}
        </select>
      </div>
    );
  }

}

export default LocationSearch;
