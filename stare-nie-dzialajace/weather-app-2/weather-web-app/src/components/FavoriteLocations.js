import React from 'react';

class FavoriteLocations extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favoriteLocations: []
    };
  }

  addLocation(location) {
    this.setState(prevState => ({
      favoriteLocations: [...prevState.favoriteLocations, location]
    }));
  }

  removeLocation(location) {
    this.setState(prevState => ({
      favoriteLocations: prevState.favoriteLocations.filter(loc => loc !== location)
    }));
  }

  render() {
    return (
      <div>
        <h2>Favorite Locations</h2>
        <ul>
          {this.state.favoriteLocations.map((location, index) =>
            <li key={index}>
              {location}
              <button onClick={() => this.removeLocation(location)}>Remove</button>
            </li>
          )}
        </ul>
      </div>
    );
  }

}

export default FavoriteLocations;
