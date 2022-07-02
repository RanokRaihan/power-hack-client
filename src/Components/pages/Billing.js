import axios from "axios";
import React, { useEffect, useState } from "react";
import AddBillForm from "../BillingForm";
import BillingHeader from "../BillingHeader";
import BillingTable from "../BillingTable";
import Modal from "../Modal";

const Billing = () => {
    const [bills, setBills] = useState([]);
    const getAllBIll = () => {
        axios.get("http://localhost:5000/billing-list").then((res) => {
            setBills(res.data.bills);
        });
    };

    useEffect(() => {
        getAllBIll();
    }, []);

    const deleteBill = (id) => {
        axios
            .delete(`http://localhost:5000/delete-billing/${id}`)
            .then((res) => {
                console.log("deleted");
                getAllBIll();
            });
    };
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <BillingHeader showModal={setShowModal} />
            <BillingTable
                bills={bills}
                deleteBill={deleteBill}
                getBills={getAllBIll}
            />
            {showModal && (
                <Modal>
                    <AddBillForm
                        showModal={setShowModal}
                        getBills={getAllBIll}
                        role='add'
                    />
                </Modal>
            )}
        </div>
    );
};

export default Billing;
