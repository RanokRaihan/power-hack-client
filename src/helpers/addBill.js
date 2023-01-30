import Axios from "axios";
import { formValidator } from "../utilities/validator";

const handleAddBill = (fullName, email, mobile, totalPaid, callback) => {
  formValidator(fullName, email, mobile, (error) => {
    if (!error) {
      const bill = {
        fullName,
        email,
        mobile,
        totalPaid,
      };
      Axios.post(`${process.env.REACT_APP_SERVER}/add-billing`, bill)
        .then((response) => {
          callback(error, response);
        })
        .catch((err) => {
          // const serverError = { serverError: err.message };
          //console.log(err);
          callback({ serverError: err.response.data.message });
        });
    } else {
      callback(error);
    }
  });
};

export { handleAddBill };
