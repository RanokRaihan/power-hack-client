import React, { useState } from "react";
import classes from "../styles/BillingTable.module.css";
import EditBillForm from "./BillingForm";
import Modal from "./Modal";

const BillingTable = ({ bills, deleteBill, getBills, currentPage, loading, error }) => {
  const [editContent, setEditContent] = useState({});
  const [showModal, setShowModal] = useState(false);

  //edit handling
  const handleEdit = (editInfo) => {
    setEditContent(editInfo);
    setShowModal(true);
  };
  return (
    <>
      <table className={classes.billingTable}>
        <thead>
          <tr>
            <th>Billing Id</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Paid Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {bills.map((bill) => {
            return (
              <tr key={bill._id}>
                <td>{bill._id}</td>
                <td>{bill.fullName}</td>
                <td>{bill.email}</td>
                <td>{bill.mobile}</td>
                <td>{bill.totalPaid}</td>
                <td>
                  <button className={classes.editButton} onClick={() => handleEdit(bill)}>
                    Edit
                  </button>
                  <button className={classes.deleteButton} onClick={() => deleteBill(bill._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {loading && !error && <h1 style={{ textAlign: "center" }}>Loading...</h1>}
      {error && <p className='error'>{error}</p>}
      {showModal && (
        <Modal>
          <EditBillForm
            showModal={setShowModal}
            role='edit'
            editInfo={editContent}
            getBills={getBills}
            currentPage={currentPage}
          />
        </Modal>
      )}
    </>
  );
};

export default BillingTable;
