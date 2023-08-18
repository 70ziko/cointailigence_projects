import React, { Component } from 'react';

class SearchBar extends Component {
    handleSearch = (event) => {
        event.preventDefault();
        const location = this.locationInput.value;
        this.props.onSearch(location);
    }

    render() {
        return (
            <form onSubmit={this.handleSearch}>
                <input type="text" ref={(input) => this.locationInput = input} placeholder="Search location..." />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default SearchBar;
