import React from "react";
import classes from "../styles/Account.module.css";
import { Link } from "react-router-dom";
const Account = () => {
    return (
        <ul className={classes.menu}>
            <li>
                <Link to='/billing'>Billing</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
            <li>
                <Link to='/signup'>Signup</Link>
            </li>
        </ul>
    );
};

export default Account;
