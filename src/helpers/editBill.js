import Axios from "axios";
import { formValidator } from "../utilities/validator";

const handleUpdateBill = (fullName, email, mobile, totalPaid, id, callback) => {
  formValidator(fullName, email, mobile, (error) => {
    if (!error) {
      const bill = {
        fullName,
        email,
        mobile,
        totalPaid,
      };
      Axios.put(`${process.env.REACT_APP_SERVER}/update-billing/${id}`, bill)
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
