import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import User from './components/User';
import Recipe from './components/Recipe';

const App = () => {
  const PageNotFound = () => (
    <div>
      <h1>404 - Page Not Found</h1>
    </div>
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={User} />
        <Route path="/recipes" component={Recipe} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
