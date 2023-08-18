import React from 'react';
import User from './components/User';
import Recipe from './components/Recipe';
import Share from './components/Share';

class UI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home',
            user: new User(),
            recipe: new Recipe(),
            share: new Share()
        };
    }

    navigate(page) {
        // Basic input validation
        if (!page) {
            throw new Error('Page is required');
        }
        this.setState({ currentPage: page });
    }

    render() {
        switch (this.state.currentPage) {
            case 'home':
                return <div>Welcome to the Recipe App!</div>;
            case 'register':
                return <this.state.user.renderRegister />;
            case 'login':
                return <this.state.user.renderLogin />;
            case 'createRecipe':
                return <this.state.recipe.renderCreateRecipe />;
            case 'editRecipe':
                return <this.state.recipe.renderEditRecipe />;
            case 'deleteRecipe':
                return <this.state.recipe.renderDeleteRecipe />;
            case 'viewRecipe':
                return <this.state.recipe.renderViewRecipe />;
            case 'shareRecipe':
                return <this.state.share.renderShareRecipe />;
            case 'viewSharedRecipe':
                return <this.state.share.renderViewSharedRecipe />;
            default:
                return <div>Page not found</div>;
        }
    }
}

export default UI;
