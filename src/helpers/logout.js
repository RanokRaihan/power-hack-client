import Axios from "axios";

const logout = (callback) => {
  try {
    Axios.get(`${process.env.REACT_APP_SERVER}/logout`)
      .then((response) => {
        callback();
      })
      .catch((err) => {
        //console.log(err.response.data.message);
      });
  } catch (error) {
    //console.log(error.message);
  }
};

export { logout };
