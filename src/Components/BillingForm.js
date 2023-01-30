import React, { useState } from "react";
import classes from "../styles/AddBillForm.module.css";
import Button from "./Button";
import TextInput from "./TextInput";

import { handleAddBill } from "../helpers/addBill";
import { handleUpdateBill } from "../helpers/editBill";

const BillingForm = ({ showModal, getBills, currentPage, role, editInfo }) => {
  const newEditInfo = editInfo
    ? { ...editInfo }
    : {
        fullName: "",
        email: "",
        mobile: "",
        totalPaid: 0,
      };
  const [fullName, setFullName] = useState(newEditInfo.fullName);
  const [email, setEmail] = useState(newEditInfo.email);
  const [mobile, setMobile] = useState(newEditInfo.mobile);
  const [totalPaid, setTotalPaid] = useState(newEditInfo.totalPaid);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handleModal = () => {
    showModal(false);
  };

  const handleBill = (e) => {
    e.preventDefault();
    switch (role) {
      case "add":
        setLoading(true);
        setError({});
        handleAddBill(fullName, email, mobile, totalPaid, (err, res) => {
          if (!err) {
            setLoading(false);
            showModal(false);
            getBills(1, "");
          } else {
            //console.log(err);
            setError(err);
            setLoading(false);
          }
        });
        break;
      case "edit":
        setLoading(true);
        setError({});
        handleUpdateBill(fullName, email, mobile, totalPaid, editInfo._id, (err, res) => {
          if (!err) {
            setLoading(false);
            showModal(false);
            getBills(currentPage, "");
          } else {
            setError(err);
            setLoading(false);
            //console.log(res);
          }
        });
        break;

      default:
        return false;
    }
  };
  return (
    <div className={classes.addBillForm}>
      <div className={classes.closeSection}>
        <span onClick={handleModal} className={`${classes.closeButton} material-icons-outlined`}>
          close
        </span>
      </div>

      <form onSubmit={handleBill}>
        <TextInput
          type='text'
          placeholder='Enter Full Name'
          icon='person'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        {error.nameError && <p className='error'>{error.nameError}</p>}
        <TextInput
          type='text'
          placeholder='Enter Email'
          icon='alternate_email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.emailError && <p className='error'>{error.emailError}</p>}
        <TextInput
          type='text'
          placeholder='Enter phone number'
          icon='phone'
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        {error.mobileError && <p className='error'>{error.mobileError}</p>}
        <TextInput
          type='number'
          placeholder='Enter paid amount'
          icon='attach_money'
          value={totalPaid}
          onChange={(e) => setTotalPaid(e.target.value)}
        />
        {error.serverError && <p className='error'>{error.serverError}</p>}
        <Button className={classes.submitButton} type='submit'>
          {loading ? <span>{`${role}ing bill...`}</span> : `${role} Bill`}
        </Button>
      </form>
    </div>
  );
};

export default BillingForm;
