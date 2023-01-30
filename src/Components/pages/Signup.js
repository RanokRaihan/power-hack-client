import React from "react";
import SignupForm from "../SignupForm";
import classes from "../../styles/SignUp.module.css";

const Signup = () => {
    return (
        <div className={classes.signupForm}>
            <h1>Create a new account</h1>
            <SignupForm />
        </div>
    );
};

export default Signup;
