import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PublicRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    return !isLoggedIn ? children : <Navigate to='/billing' />;
};

export default PublicRoute;
