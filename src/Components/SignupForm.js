import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { signup } from "../helpers/signup";
import { signupValidator } from "../utilities/validator";
import Button from "./Button";
import TextInput from "./TextInput";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});

  //auth context
  const { getLoggedIn } = useAuth();

  //handle signup function
  const handleSinup = (e) => {
    e.preventDefault();
    signupValidator(name, email, mobile, password, confirmPassword, (err) => {
      if (!err) {
        setError({});
        const newUser = {
          name,
          email,
          mobile,
          password,
          confirmPassword,
        };
        signup(newUser, (err, response) => {
          if (!err) {
            getLoggedIn();
          } else {
            setError({ serverError: err.message });
          }
        });
        //console.log(newUser);
      } else {
        setError(err);
      }
    });
  };
  return (
    <form onSubmit={handleSinup}>
      <TextInput
        type='text'
        placeholder='Enter Your Name'
        icon='person'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {error.nameError && <p className='error'>{error.nameError}</p>}
      <TextInput
        type='text'
        placeholder='Enter Email'
        icon='alternate_email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        autoComplete='new-email'
      />
      {error.emailError && <p className='error'>{error.emailError}</p>}
      <TextInput
        type='text'
        placeholder='Enter phone number'
        icon='phone'
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
        autoComplete='new-mobile'
      />
      {error.mobileError && <p className='error'>{error.mobileError}</p>}
      <TextInput
        type='password'
        placeholder='Enter Password'
        icon='lock'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete='new-password'
      />{" "}
      {error.passwordError && <p className='error'>{error.passwordError}</p>}
      <TextInput
        type='password'
        placeholder='Confirm Password'
        icon='lock_clock'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error.confirmPasswordError && <p className='error'>{error.confirmPasswordError}</p>}
      {error.serverError && <p className='error'>{error.serverError}</p>}
      <Button type='submit'>
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
