import React, { useState } from "react";

const RecipeForm = () => {
    const [recipeName, setRecipeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [cookingTime, setCookingTime] = useState("");
    const [servings, setServings] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const recipeDetails = {
            recipeName,
            ingredients,
            instructions,
            cookingTime,
            servings
        };
        // saveRecipeDetails is a function that would handle the saving of the recipe details
        saveRecipeDetails(recipeDetails);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Recipe Name:
                <input type="text" value={recipeName} onChange={e => setRecipeName(e.target.value)} required />
            </label>
            <label>
                Ingredients:
                <textarea value={ingredients} onChange={e => setIngredients(e.target.value)} required />
            </label>
            <label>
                Instructions:
                <textarea value={instructions} onChange={e => setInstructions(e.target.value)} required />
            </label>
            <label>
                Cooking Time:
                <input type="text" value={cookingTime} onChange={e => setCookingTime(e.target.value)} required />
            </label>
            <label>
                Servings:
                <input type="number" value={servings} onChange={e => setServings(e.target.value)} required />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default RecipeForm;
