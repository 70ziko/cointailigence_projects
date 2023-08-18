import React, { useState } from 'react';

const CommentForm = ({ saveComment }) => {
    const [commentText, setCommentText] = useState('');

    const handleCommentChange = (event) => {
        setCommentText(event.target.value);
    }

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        saveComment(commentText);
        setCommentText('');
    }

    return (
        <form onSubmit={handleCommentSubmit}>
            <textarea
                value={commentText}
                onChange={handleCommentChange}
                placeholder="Write your comment here..."
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default CommentForm;
