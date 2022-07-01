import React from "react";
import Button from "./Button";
import TextInput from "./TextInput";
import classes from "../styles/AddBillForm.module.css";

const AddBillForm = ({ showModal }) => {
    const handleModal = () => {
        showModal(false);
    };
    return (
        <div className={classes.addBillForm}>
            <div className={classes.closeSection}>
                <span
                    onClick={handleModal}
                    className={`${classes.closeButton} material-icons-outlined`}
                >
                    close
                </span>
            </div>

            <form action=''>
                <TextInput
                    type='text'
                    placeholder='Enter Full Name'
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
                    type='number'
                    placeholder='Enter paid amount'
                    icon='attach_money'
                    required
                />
                <Button>Add Bill</Button>
            </form>
        </div>
    );
};

export default AddBillForm;
