import axios from "axios";
const loginUser = (username, password) => {
    axios
        .post("http://localhost:5000/login", {
            username,
            password,
        })
        .then((response) => {
            localStorage.setItem("token", response.data.token);
        });
};

export { loginUser };
