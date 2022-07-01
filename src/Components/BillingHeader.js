import React from "react";
import classes from "../styles/BillingHeader.module.css";

const BillingHeader = ({ showModal }) => {
    const handleModal = () => {
        showModal(true);
    };
    return (
        <div className={classes.billingHeader}>
            <form className={classes.searchForm} action='#'>
                <input type='text' placeholder='Search Bill' />
                <button className={classes.searchButton}>Search</button>
            </form>
            <p>
                Paid Total: <span>0</span>
            </p>
            <button onClick={handleModal} className={classes.addBillButton}>
                Add Bill
            </button>
        </div>
    );
};

export default BillingHeader;
