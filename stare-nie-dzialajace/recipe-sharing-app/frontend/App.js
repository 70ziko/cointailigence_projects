import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import views here
// import HomeView from './views/HomeView';
// import RecipeView from './views/RecipeView';

const App = () => {
  return (
    <Router>
      <Switch>
        {/* Define routes here */}
        {/* <Route path='/' exact component={HomeView} />
        <Route path='/recipe/:id' component={RecipeView} /> */}
      </Switch>
    </Router>
  );
};

export default App;
