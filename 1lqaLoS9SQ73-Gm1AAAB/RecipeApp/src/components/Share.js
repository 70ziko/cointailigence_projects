import React from 'react';

class Share extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sharedRecipes: []
        };
    }

    validateInput(id) {
        // Basic input validation
        if (!id) {
            throw new Error('Recipe id is required');
        }
    }

    shareRecipe(id) {
        this.validateInput(id);
        const recipeToShare = this.props.recipes.find(recipe => recipe.id === id);
        if (!recipeToShare) {
            throw new Error('Recipe not found');
        }
        this.setState(prevState => ({
            sharedRecipes: [...prevState.sharedRecipes, recipeToShare]
        }));
    }

    viewSharedRecipe(id) {
        this.validateInput(id);
        const sharedRecipe = this.state.sharedRecipes.find(recipe => recipe.id === id);
        if (!sharedRecipe) {
            throw new Error('Shared recipe not found');
        }
        return sharedRecipe;
    }

    render() {
        // Render method will be implemented in the next steps
    }
}

export default Share;
