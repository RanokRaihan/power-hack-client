import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { login } from "../helpers/login";
import Button from "./Button";
import TextInput from "./TextInput";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const { getLoggedIn } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    login({ username, password }, (err, res) => {
      if (!err) {
        //console.log("login successful");
        getLoggedIn();
      } else {
        setError({ serverError: err.response.data.message });
      }
    });
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
      {error.serverError && <p className='error'>{error.serverError}</p>}
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
