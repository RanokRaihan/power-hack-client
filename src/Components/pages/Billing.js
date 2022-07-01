import React, { useState } from "react";
import AddBillForm from "../AddBillForm";
import BillingHeader from "../BillingHeader";
import BillingTable from "../BillingTable";
import Modal from "../Modal";

const Billing = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <BillingHeader showModal={setShowModal} />
            <BillingTable />
            {showModal && (
                <Modal>
                    <AddBillForm showModal={setShowModal} />
                </Modal>
            )}
        </div>
    );
};

export default Billing;
