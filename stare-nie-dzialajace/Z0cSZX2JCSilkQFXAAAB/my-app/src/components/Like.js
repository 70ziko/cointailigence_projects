import React, { Component } from 'react';
import axios from 'axios';

class Like extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: false,
      errors: ''
    };
  }

  handleLike = (event) => {
    event.preventDefault();
    const { user, recipe } = this.props;
    axios.post('http://localhost:3001/likes', { user, recipe }, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'created') {
          this.setState({ liked: true });
        } else {
          this.setState({ errors: response.data.errors });
        }
      })
      .catch(error => console.log('api errors:', error));
  }

  handleUnlike = (event) => {
    event.preventDefault();
    const { user, recipe } = this.props;
    axios.delete(`http://localhost:3001/likes/${recipe.id}`, { data: { user } }, { withCredentials: true })
      .then(response => {
        if (response.data.status === 'deleted') {
          this.setState({ liked: false });
        } else {
          this.setState({ errors: response.data.errors });
        }
      })
      .catch(error => console.log('api errors:', error));
  }

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map((error) => {
            return <li key={error}>{error}</li>
          })}
        </ul>
      </div>
    );
  }

  render() {
    const { liked } = this.state;
    return (
      <div>
        {liked ? (
          <button onClick={this.handleUnlike}>Unlike</button>
        ) : (
          <button onClick={this.handleLike}>Like</button>
        )}
        <div>
          {this.state.errors ? this.handleErrors() : null}
        </div>
      </div>
    );
  }
}

export default Like;
