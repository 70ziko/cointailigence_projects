import React from 'react';

class SocialMedia extends React.Component {
    shareOnFacebook(recipe) {
        try {
            console.log(`Sharing ${recipe.title} on Facebook...`);
            // Here, we would add the code to interact with Facebook's API
        } catch (error) {
            console.log(`Error sharing on Facebook: ${error}`);
        }
    }

    shareOnTwitter(recipe) {
        try {
            console.log(`Sharing ${recipe.title} on Twitter...`);
            // Here, we would add the code to interact with Twitter's API
        } catch (error) {
            console.log(`Error sharing on Twitter: ${error}`);
        }
    }

    shareOnInstagram(recipe) {
        try {
            console.log(`Sharing ${recipe.title} on Instagram...`);
            // Here, we would add the code to interact with Instagram's API
        } catch (error) {
            console.log(`Error sharing on Instagram: ${error}`);
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => this.shareOnFacebook(this.props.recipe)}>Share on Facebook</button>
                <button onClick={() => this.shareOnTwitter(this.props.recipe)}>Share on Twitter</button>
                <button onClick={() => this.shareOnInstagram(this.props.recipe)}>Share on Instagram</button>
            </div>
        );
    }
}

export default SocialMedia;
