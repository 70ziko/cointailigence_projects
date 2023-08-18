import React, { Component } from 'react';
import axios from 'axios';

class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      recipe: '',
      public: false,
      errors: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handlePublicChange = (event) => {
    this.setState({
      public: event.target.checked
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {user, recipe, public} = this.state;
    let share = {
      user: user,
      recipe: recipe,
      public: public
    }

    axios.post('http://localhost:3001/shares', {share}, {withCredentials: true})
      .then(response => {
        if (response.data.status === 'created') {
          this.props.handleNewShare(response.data);
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
    const {user, recipe, public} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="user"
            type="text"
            name="user"
            value={user}
            onChange={this.handleChange}
          />
          <input
            placeholder="recipe"
            type="text"
            name="recipe"
            value={recipe}
            onChange={this.handleChange}
          />
          <label>
            Public:
            <input
              type="checkbox"
              name="public"
              checked={public}
              onChange={this.handlePublicChange}
            />
          </label>
          <button placeholder="submit" type="submit">
            Share Recipe
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

export default Share;
