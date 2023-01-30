import React from "react";
import "../styles/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Billing from "./pages/Billing";
import Axios from "axios";
import { AuthProvider } from "../context/AuthContext";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

// axios default
Axios.defaults.withCredentials = true;

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <PublicRoute>
                                    <Login />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path='/login'
                            element={
                                <PublicRoute>
                                    <Login />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path='/signup'
                            element={
                                <PublicRoute>
                                    <Signup />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path='/billing'
                            element={
                                <PrivateRoute>
                                    <Billing />
                                </PrivateRoute>
                            }
                        />
                    </Routes>
                </Layout>
            </AuthProvider>
        </Router>
    );
};

export default App;
