import React, { Component } from 'react';
import axios from 'axios';

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      text: '',
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
    const {user, text} = this.state;
    let comment = {
      user: user,
      text: text
    }

    axios.post('http://localhost:3001/comments', {comment}, {withCredentials: true})
      .then(response => {
        if (response.data.status === 'created') {
          this.props.handleNewComment(response.data);
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
    const {user, text} = this.state;
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
          <textarea
            placeholder="comment"
            name="text"
            value={text}
            onChange={this.handleChange}
          />
          <button placeholder="submit" type="submit">
            Post Comment
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

export default Comment;
