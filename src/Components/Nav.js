import React from "react";
import logo from "../assets/images/logo.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

const Nav = () => {
    return (
        <div className={`${classes.navWrapper} column`}>
            <img className={classes.logo} src={logo} alt='Power Hack Logo' />
            <Account />
        </div>
    );
};

export default Nav;
