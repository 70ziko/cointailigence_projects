import React, { useState } from "react";

const RatingForm = ({ onSubmit }) => {
    const [rating, setRating] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(rating);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Rating:
                <input
                    type="number"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default RatingForm;
