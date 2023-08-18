import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@ui5/webcomponents-react'

import App from './App'
import './style.css'

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
    <ThemeProvider>
        <BrowserRouter basename='/seed-react-openui5'>
            <App />
        </BrowserRouter>
    </ThemeProvider>    
);