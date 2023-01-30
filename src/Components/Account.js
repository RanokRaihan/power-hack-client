import React from "react";
import classes from "../styles/Account.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { logout } from "../helpers/logout";

const Account = () => {
    const { isLoggedIn, currentUser, getLoggedIn } = useAuth();

    const handleLogout = () => {
        logout(getLoggedIn);
    };
    return (
        <ul className={classes.menu}>
            <li>
                <Link to='/billing'>Billing</Link>
            </li>
            {isLoggedIn ? (
                <>
                    <li className={classes.user}>
                        <span className='material-icons-outlined'>person</span>
                        {currentUser.name}
                    </li>
                    <button className={classes.logout} onClick={handleLogout}>
                        logout
                    </button>
                </>
            ) : (
                <>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/signup'>Signup</Link>
                    </li>
                </>
            )}
        </ul>
    );
};

export default Account;
