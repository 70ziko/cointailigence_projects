import React from 'react';

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <h2>{recipe.name}</h2>
            <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
            <p><strong>Instructions:</strong> {recipe.instructions}</p>
            <p><strong>Cooking Time:</strong> {recipe.cookingTime}</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>

            <div className="comments">
                <h3>Comments</h3>
                {recipe.comments.map((comment, index) => (
                    <div key={index}>
                        <p><strong>{comment.user}:</strong> {comment.text}</p>
                    </div>
                ))}
            </div>

            <div className="ratings">
                <h3>Ratings</h3>
                <p>Average Rating: {recipe.ratings.reduce((a, b) => a + b, 0) / recipe.ratings.length}</p>
            </div>
        </div>
    );
}

export default RecipeCard;
