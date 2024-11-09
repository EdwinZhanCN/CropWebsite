import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios";

// Set the base URL for axios, which is the URL of the backend server (spring boot server)
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
