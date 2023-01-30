import Axios from "axios";

const login = (user, callback) => {
  try {
    Axios.post(`${process.env.REACT_APP_SERVER}/login`, user)
      .then((response) => {
        //console.log("login successfull");
        callback(null, response);
      })
      .catch((err) => {
        callback(err);
      });
  } catch (error) {
    callback(error);
  }
};

export { login };
