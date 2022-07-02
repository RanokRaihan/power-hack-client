const formValidator = (fullName, email, mobile, callback) => {
    let error = {};
    if (fullName.trim().length < 1) {
        error.nameError = "Please Enter full Name";
    }
    if (email.trim().length < 1 || !email.includes("@")) {
        error.emailError = "Please Enter correct email";
    }
    if (mobile.trim().length < 11) {
        error.mobileError = "Please Enter 11 digit mobile number";
    }
    if (Object.keys(error).length === 0) {
        error = false;
    }
    callback(error);
};

export { formValidator };
