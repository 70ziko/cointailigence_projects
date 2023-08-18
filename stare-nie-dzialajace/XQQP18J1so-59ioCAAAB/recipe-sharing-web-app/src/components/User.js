import React from 'react';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            registeredUser: null,
            loggedInUser: null,
        };
    }

    registerUser = (username, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const user = { username, password };
                this.setState({ registeredUser: user });
                resolve(user);
            }, 1000);
        });
    }

    loginUser = (username, password) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const { registeredUser } = this.state;
                if (registeredUser && registeredUser.username === username && registeredUser.password === password) {
                    this.setState({ loggedInUser: registeredUser });
                    resolve(registeredUser);
                } else {
                    reject(new Error('Invalid username or password'));
                }
            }, 1000);
        });
    }

    logoutUser = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.setState({ loggedInUser: null });
                resolve(true);
            }, 1000);
        });
    }

    render() {
        return null;
    }
}

export default User;
