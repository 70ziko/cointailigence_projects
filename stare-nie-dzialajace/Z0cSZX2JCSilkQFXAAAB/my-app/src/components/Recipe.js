import React, { Component } from 'react';
import axios from 'axios';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      ingredients: '',
      instructions: '',
      cookingTime: '',
      servingSize: '',
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
    const {title, ingredients, instructions, cookingTime, servingSize} = this.state;
    let recipe = {
      title: title,
      ingredients: ingredients,
      instructions: instructions,
      cookingTime: cookingTime,
      servingSize: servingSize
    }

    axios.post('http://localhost:3001/recipes', {recipe}, {withCredentials: true})
      .then(response => {
        if (response.data.status === 'created') {
          this.props.handleNewRecipe(response.data);
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
    const {title, ingredients, instructions, cookingTime, servingSize} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="title"
            type="text"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <textarea
            placeholder="ingredients"
            name="ingredients"
            value={ingredients}
            onChange={this.handleChange}
          />
          <textarea
            placeholder="instructions"
            name="instructions"
            value={instructions}
            onChange={this.handleChange}
          />
          <input
            placeholder="cooking time"
            type="text"
            name="cookingTime"
            value={cookingTime}
            onChange={this.handleChange}
          />
          <input
            placeholder="serving size"
            type="text"
            name="servingSize"
            value={servingSize}
            onChange={this.handleChange}
          />
          <button placeholder="submit" type="submit">
            Create Recipe
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

export default Recipe;
