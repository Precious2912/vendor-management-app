import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BaseRoute }  from "./routes/BaseRoute";
import {AuthProvider} from "./context/AuthProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<BaseRoute />}></Route>
          </Routes>
        </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

