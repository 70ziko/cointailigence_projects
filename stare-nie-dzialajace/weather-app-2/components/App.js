import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Landing from './views/Landing/Landing.js'

const App = () => {

    const PageNotFound = () => <p style={{ display: 'block', textAlign: 'center', fontSize: '3rem', }}>
        404 - strony nie znaleziono
    </p>
    
    return <Routes>
        <Route path='*' element={<PageNotFound />} />
        <Route path='/' element={<Landing />} />
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
