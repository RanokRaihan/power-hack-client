import React from "react";
import "../styles/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Billing from "./pages/Billing";

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/billing' element={<Billing />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default App;
