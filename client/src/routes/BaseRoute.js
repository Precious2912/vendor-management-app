import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute' 
import { HomePage } from '../pages/HomePage'
import { ErrorPage } from '../pages/ErrorPage'
import { RegisterPage } from '../pages/RegisterPage';

export const BaseRoute = () => {
    return (
        <Routes>
            {/* Public Routes */}
            <Route path='/register' element={<RegisterPage />}></Route>
            {/* <Route path='/login' element={<LoginPage />}></Route> */}
            {/* Protected Routes */}
            <Route element={<ProtectedRoute />}>
                <Route path='/' element={<HomePage />} />
            </Route>

            {/* Error Route */}
            <Route path='*' element={<ErrorPage />}></Route>
           
        </Routes>
    );
};