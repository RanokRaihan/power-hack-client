import axios from "axios";

const signup = (user, callback) => {
  try {
    axios
      .post(`${process.env.REACT_APP_SERVER}/registration`, user)
      .then((response) => {
        //console.log("registration successfull");
        callback(null, response);
      })
      .catch((err) => {
        callback({ message: err.response.data.message });
      });
  } catch (error) {
    callback({ message: error.message });
  }
};

export { signup };
