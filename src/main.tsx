import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
const Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement );
Root.render(
    <StrictMode>
        <BrowserRouter>
            <App /> 
        </BrowserRouter>
    </StrictMode>
);