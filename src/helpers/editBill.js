import { formValidator } from "../utilities/validator";
import Axios from "axios";

const handleUpdateBill = (fullName, email, mobile, totalPaid, id, callback) => {
    formValidator(fullName, email, mobile, (error) => {
        if (!error) {
            const bill = {
                fullName,
                email,
                mobile,
                totalPaid,
            };
            Axios.put(`http://localhost:5000/update-billing/${id}`, bill)
                .then((response) => {
                    callback(error, response);
                })
                .catch((err) => {
                    callback({ serverError: err.message });
                });
        } else {
            callback(error);
        }
    });
};

export { handleUpdateBill };
