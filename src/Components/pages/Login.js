import React from "react";
import LoginForm from "../LoginForm";
import classes from "../../styles/Login.module.css";

const Login = () => {
    return (
        <div className={classes.loginForm}>
            <h1>Login to your account</h1>
            <LoginForm />
        </div>
    );
};

export default Login;
