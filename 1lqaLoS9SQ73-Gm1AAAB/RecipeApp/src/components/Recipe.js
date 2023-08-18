import React from 'react';

class Recipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recipes: []
        };
    }

    validateInput(recipe) {
        // Basic input validation
        if (!recipe.name || !recipe.ingredients || !recipe.steps || !recipe.cookingTime || !recipe.servingSize) {
            throw new Error('All recipe details are required');
        }
    }

    createRecipe(recipe) {
        this.validateInput(recipe);
        const newRecipe = { id: this.state.recipes.length + 1, ...recipe };
        this.setState(prevState => ({
            recipes: [...prevState.recipes, newRecipe]
        }));
    }

    editRecipe(id, newDetails) {
        this.validateInput(newDetails);
        this.setState(prevState => ({
            recipes: prevState.recipes.map(recipe =>
                recipe.id === id ? { ...recipe, ...newDetails } : recipe
            )
        }));
    }

    deleteRecipe(id) {
        if (!id) {
            throw new Error('Recipe id is required');
        }
        this.setState(prevState => ({
            recipes: prevState.recipes.filter(recipe => recipe.id !== id)
        }));
    }

    viewRecipe(id) {
        if (!id) {
            throw new Error('Recipe id is required');
        }
        const recipe = this.state.recipes.find(recipe => recipe.id === id);
        if (!recipe) {
            throw new Error('Recipe not found');
        }
        return recipe;
    }

    render() {
        // Render method will be implemented in the next steps
    }
}

export default Recipe;
