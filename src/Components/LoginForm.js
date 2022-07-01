import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
// import classes from "../styles/LoginForm.module.css";
import TextInput from "./TextInput";

const LoginForm = () => {
    return (
        <form action='#'>
            <TextInput
                type='text'
                placeholder='Enter Email'
                icon='alternate_email'
                required
            />
            <TextInput
                type='password'
                placeholder='Enter Password'
                icon='lock'
                required
            />
            <Button>
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
