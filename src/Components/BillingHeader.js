import React, { useState } from "react";
import classes from "../styles/BillingHeader.module.css";

const BillingHeader = ({ setKeyword, showModal, totalPaid }) => {
  const [searchInput, setSearchInput] = useState("");
  const handleModal = () => {
    showModal(true);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      setKeyword(searchInput);
    }
  };

  const handleClear = (e) => {
    setSearchInput("");
    setKeyword("");
  };
  return (
    <div className={classes.billingHeader}>
      <form className={classes.searchForm} onSubmit={handleSearch}>
        <div className={classes.inputWrapper}>
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            value={searchInput}
            type='text'
            placeholder='Search Bill'
          />
          {searchInput && (
            <button onClick={handleClear} className={classes.clearButton}>
              X
            </button>
          )}
        </div>

        <button className={classes.searchButton}>Search</button>
      </form>
      <p>
        Paid Total: <span>{totalPaid}</span>
      </p>
      <button onClick={handleModal} className={classes.addBillButton}>
        Add Bill
      </button>
    </div>
  );
};

export default BillingHeader;
