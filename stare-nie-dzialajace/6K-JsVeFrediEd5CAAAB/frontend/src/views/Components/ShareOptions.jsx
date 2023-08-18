import React from 'react';

const ShareOptions = ({ recipe }) => {
    const shareViaSocialMedia = () => {
        console.log(`Sharing ${recipe.name} via social media...`);
    };

    const shareViaEmail = () => {
        const subject = encodeURIComponent(`Check out this recipe: ${recipe.name}`);
        const body = encodeURIComponent(`I thought you might like this recipe: ${window.location.href}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };

    const shareViaDirectLink = () => {
        navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
    };

    return (
        <div>
            <button onClick={shareViaSocialMedia}>Share on Social Media</button>
            <button onClick={shareViaEmail}>Share via Email</button>
            <button onClick={shareViaDirectLink}>Copy Link</button>
        </div>
    );
};

export default ShareOptions;
