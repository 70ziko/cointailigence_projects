import React, { Component } from 'react';
import Weather from './components/Weather';
import weatherService from './services/weatherService';

class App extends Component {
    constructor() {
        super();
        this.state = {
            location: ''
        };
    }

    componentDidMount() {
        this.fetchUserLocation();
    }

    fetchUserLocation = async () => {
        const location = await weatherService.getUserLocation();
        this.setState({ location });
    }

    render() {
        const { location } = this.state;
        return (
            <div>
                <h1>Weather App</h1>
                {location && <Weather location={location} />}
            </div>
        );
    }
}

export default App;
