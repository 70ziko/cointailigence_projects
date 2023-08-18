import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './views/Pages/Home';
import Profile from './views/Pages/Profile';

const App = () => {
    const PageNotFound = () => <p style={{ display: 'block', textAlign: 'center', fontSize: '3rem', }}>
        404 - Page not found
    </p>

    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='*' element={<PageNotFound />} />
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
        </Router>
    );
}

export default App;
