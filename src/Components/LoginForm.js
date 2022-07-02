import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
// import classes from "../styles/LoginForm.module.css";
import TextInput from "./TextInput";
import { loginUser } from "../lib/loginUser";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (username.trim() && password) {
            loginUser(username, password);
        }
    };
    return (
        <form onSubmit={handleLogin}>
            <TextInput
                type='text'
                placeholder='Enter Email or mobile'
                icon='alternate_email'
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextInput
                type='password'
                placeholder='Enter Password'
                icon='lock'
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type='submit'>
                <span>Login</span>
            </Button>
            <div className='info'>
                Don't have an account?
                <Link to='/signup'> Signup </Link>
                instead.
            </div>
        </form>
    );
};

export default LoginForm;
