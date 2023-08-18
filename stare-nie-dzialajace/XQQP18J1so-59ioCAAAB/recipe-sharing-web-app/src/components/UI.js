import React, { Component } from 'react';

class UI extends Component {
    displayRecipeForm() {
        // This function will return the JSX for the Recipe form
        return (
            <form>
                <label>
                    Recipe Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Ingredients:
                    <input type="text" name="ingredients" />
                </label>
                <label>
                    Instructions:
                    <textarea name="instructions" />
                </label>
                <label>
                    Preparation Time:
                    <input type="text" name="preparationTime" />
                </label>
                <label>
                    Serving Size:
                    <input type="text" name="servingSize" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }

    displayRecipeList() {
        // This function will return the JSX for the Recipe list
        // For now, let's assume we have an array of recipes
        const recipes = this.props.recipes;

        return (
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>
                        {recipe.name}
                    </li>
                ))}
            </ul>
        )
    }

    displayEditForm() {
        // This function will return the JSX for the Edit form
        // For now, let's assume we have a recipe to edit
        const recipe = this.props.recipe;

        return (
            <form>
                <label>
                    Recipe Name:
                    <input type="text" name="name" value={recipe.name} />
                </label>
                <label>
                    Ingredients:
                    <input type="text" name="ingredients" value={recipe.ingredients} />
                </label>
                <label>
                    Instructions:
                    <textarea name="instructions" value={recipe.instructions} />
                </label>
                <label>
                    Preparation Time:
                    <input type="text" name="preparationTime" value={recipe.preparationTime} />
                </label>
                <label>
                    Serving Size:
                    <input type="text" name="servingSize" value={recipe.servingSize} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }

    displayDeleteConfirmation() {
        // This function will return the JSX for the Delete confirmation
        return (
            <div>
                <p>Are you sure you want to delete this recipe?</p>
                <button onClick={this.props.deleteRecipe}>Yes</button>
                <button onClick={this.props.cancelDelete}>No</button>
            </div>
        )
    }

    render() {
        // In the render method, we can choose which method to call based on some condition
        // For now, let's just call the displayRecipeForm method
        return this.displayRecipeForm();
    }
}

export default UI;
