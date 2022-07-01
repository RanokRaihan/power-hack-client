import React from "react";
import TextInput from "./TextInput";
import Button from "./Button";
import { Link } from "react-router-dom";

const SignupForm = () => {
    return (
        <form action='#'>
            <TextInput
                type='text'
                placeholder='Enter Your Name'
                icon='person'
                required
            />
            <TextInput
                type='text'
                placeholder='Enter Email'
                icon='alternate_email'
                required
            />
            <TextInput
                type='text'
                placeholder='Enter phone number'
                icon='phone'
                required
            />
            <TextInput
                type='password'
                placeholder='Enter Password'
                icon='lock'
                required
            />
            <TextInput
                type='password'
                placeholder='Confirm Password'
                icon='lock_clock'
                required
            />
            <Button>
                <span>Sign Up</span>
            </Button>
            <div className='info'>
                Already have an account?
                <Link to='/login'> Login </Link>
                instead.
            </div>
        </form>
    );
};

export default SignupForm;
