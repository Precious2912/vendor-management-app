import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { UseAuth } from "../hooks/UseAuth";

export const ProtectedRoute = () => {
    const location = useLocation();
    const { loggedIn } = UseAuth();

    return loggedIn ? ( <
        Outlet / >
    ) : ( <
        Navigate to = "/login"
        state = {
            { from: location } }
        replace / >
    );
};