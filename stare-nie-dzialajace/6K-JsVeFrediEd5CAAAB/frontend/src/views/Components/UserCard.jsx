import React from 'react';
import RecipeCard from './RecipeCard';

const UserCard = ({ user }) => {
    return (
        <div className="user-card">
            <div className="user-info">
                <img src={user.profilePicture} alt={`${user.name}'s profile`} />
                <h2>{user.name}</h2>
            </div>
            <div className="user-recipes">
                {user.recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
            </div>
        </div>
    );
}

export default UserCard;
