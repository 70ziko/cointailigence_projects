import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import User from './User';
import Recipe from './Recipe';
import SocialMedia from './SocialMedia';
import UI from './UI';

import Landing from './views/Landing/Landing.js';

const App = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // TODO: Implement user authentication logic here
    }, []);

    const PageNotFound = () => <p style={{ display: 'block', textAlign: 'center', fontSize: '3rem', }}>
        404 - strony nie znaleziono
    </p>

    return (
        <Router>
            <UI user={user} setUser={setUser}>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    {/* TODO: Add more routes here */}
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </UI>
        </Router>
    );
};

export default App;
