import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';


ReactDOM.hydrateRoot(
    <Router>
        <AppRoutes />
    </Router>,
    document.querySelector('#root'),
);