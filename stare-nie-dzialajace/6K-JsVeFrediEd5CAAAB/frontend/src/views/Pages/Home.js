import React, { useState, useEffect } from 'react';
import RecipeCard from '../Components/RecipeCard';
import UserCard from '../Components/UserCard';
import { Loader } from '@ui5/webcomponents-react/'

const Home = () => {
    const [recipes, setRecipes] = useState([]);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch recipes from API
        fetch('http://localhost:3000/api/recipes')
            .then(response => response.json())
            .then(data => {
                setRecipes(data);
                setLoading(false);
            })
            .catch(error => console.error('Error:', error));

        // Fetch users from API
        fetch('http://localhost:3000/api/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <>
            {loading ? <Loader /> :
                <div>
                    <h1 className="pageTitle">Recipes</h1>
                    {recipes.map(recipe => (
                        <div key={recipe.id}>
                            <RecipeCard recipe={recipe} />
                            <UserCard user={users.find(user => user.id === recipe.userId)} />
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default Home;
