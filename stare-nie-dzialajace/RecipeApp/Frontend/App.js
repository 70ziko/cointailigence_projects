import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './views/Landing/Landing.js'
import RegisterComponent from './components/RegisterComponent.js'
import LoginComponent from './components/LoginComponent.js'
import LogoutComponent from './components/LogoutComponent.js'
import RecipeCreationComponent from './components/RecipeCreationComponent.js'
import RecipeSharingComponent from './components/RecipeSharingComponent.js'
import RecipeReviewComponent from './components/RecipeReviewComponent.js'
import ProfileComponent from './components/ProfileComponent.js'
import SearchComponent from './components/SearchComponent.js'

const App = () => {

    const PageNotFound = () => <p style={{ display: 'block', textAlign: 'center', fontSize: '3rem', }}>
        404 - strony nie znaleziono
    </p>
    
    return <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<RegisterComponent />} />
        <Route path='/login' element={<LoginComponent />} />
        <Route path='/logout' element={<LogoutComponent />} />
        <Route path='/create-recipe' element={<RecipeCreationComponent />} />
        <Route path='/share-recipe' element={<RecipeSharingComponent />} />
        <Route path='/review-recipe' element={<RecipeReviewComponent />} />
        <Route path='/profile' element={<ProfileComponent />} />
        <Route path='/search' element={<SearchComponent />} />
    </Routes>
}

function test(a) {
    console.log(a)
    let found = false
    if (found==true) {
        console.log('found')
    } else {
        console.log('not found')
    // hi mom
    }
}

export default App
