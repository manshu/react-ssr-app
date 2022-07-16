import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

export default () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    );
}