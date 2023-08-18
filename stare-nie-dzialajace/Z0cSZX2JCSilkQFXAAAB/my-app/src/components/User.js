import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {username, password} = this.state;
    let user = {
      username: username,
      password: password
    }

    axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
      .then(response => {
        if (response.data.status === 'created') {
          this.props.handleLogin(response.data);
          this.redirect();
        } else {
          this.setState({
            errors: response.data.errors
          });
        }
      })
      .catch(error => console.log('api errors:', error));
  }

  redirect = () => {
    this.props.history.push('/');
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
    const {username, password} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button placeholder="submit" type="submit">
            Register
          </button>
        </form>
        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );
  }
}

export default User;
