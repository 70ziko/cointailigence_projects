import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@ui5/webcomponents-react'

import App from './App'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
    <ThemeProvider>
        <BrowserRouter basename='/weather-web-app'>
            <App />
        </BrowserRouter>
    </ThemeProvider>    
);
