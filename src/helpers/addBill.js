import { formValidator } from "../utilities/validator";
import Axios from "axios";

const handleAddBill = (fullName, email, mobile, totalPaid, callback) => {
    formValidator(fullName, email, mobile, (error) => {
        if (!error) {
            const bill = {
                fullName,
                email,
                mobile,
                totalPaid,
            };
            Axios.post("http://localhost:5000/add-billing", bill)
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

export { handleAddBill };
