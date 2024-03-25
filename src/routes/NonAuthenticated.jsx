import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/NonAuthenticated/Login';

const NonAuthenticated = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
        </Routes>
    )
}

export default NonAuthenticated