import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './main.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from './shadcn-ui-components/ui/toaster';
const Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement );
Root.render(
        <BrowserRouter>
      <Toaster />
            <App /> 
        </BrowserRouter>
);