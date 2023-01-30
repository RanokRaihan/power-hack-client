import axios from "axios";
import React, { useEffect, useState } from "react";
import AddBillForm from "../BillingForm";
import BillingHeader from "../BillingHeader";
import BillingTable from "../BillingTable";
import Modal from "../Modal";
import Pagination from "../Pagination";

const Billing = () => {
  const [keyword, setKeyword] = useState("");
  const [bills, setBills] = useState([]);
  const [totalPaid, setTotalPaid] = useState(0);
  const [totalBills, setTotalBills] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // console.log(currentPage);
  const getAllBIll = (page, keyword) => {
    axios
      .get(`${process.env.REACT_APP_SERVER}/billing-list?keyword=${keyword}&page=${page}&limit=5`)
      .then((res) => {
        setLoading(false);
        setError(false);
        setTotalPaid(res.data.totalPaid);
        setBills(res.data.bills);
        setTotalBills(res.data.totalBills);
      })
      .catch((err) => {
        setLoading(false);
        setBills([]);
        setTotalPaid(0);
        setError(err.response.data.message);
      });
  };

  useEffect(() => {
    console.log(currentPage);
    getAllBIll(currentPage, keyword);
  }, [currentPage, keyword]);

  const deleteBill = (id) => {
    axios.delete(`${process.env.REACT_APP_SERVER}/delete-billing/${id}`).then((res) => {
      //console.log("deleted");
      getAllBIll();
    });
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <BillingHeader setKeyword={setKeyword} showModal={setShowModal} totalPaid={totalPaid} />
      <BillingTable
        bills={bills}
        deleteBill={deleteBill}
        getBills={getAllBIll}
        currentPage={currentPage}
        loading={loading}
        error={error}
      />
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalBills={totalBills} />
      {showModal && (
        <Modal>
          <AddBillForm showModal={setShowModal} getBills={getAllBIll} role='add' />
        </Modal>
      )}
    </div>
  );
};

export default Billing;
