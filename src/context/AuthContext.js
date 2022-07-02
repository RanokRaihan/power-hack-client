import React, { createContext, useContext, useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { loginUser } from "../lib/loginUser";

// create a new context for authentication
const authContext = createContext();

export function useAuth() {
    return useContext(authContext);
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();
    // auth state change
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const user = jwtDecode(token);
            setCurrentUser({
                username: user.username,
                mobile: user.mobile,
                email: user.email,
            });
            setLoading(false);
        } else {
            setCurrentUser({});
        }
    }, [currentUser]);
    // signup function
    // async function signup(email, password, username) {
    //     //get auth object
    //     const auth = getAuth();

    //     //create new user
    //     await createUserWithEmailAndPassword(auth, email, password);

    //     //update profile
    //     await updateProfile(auth.currentUser, {
    //         displayName: username,
    //     });
    //     const user = auth.currentUser;
    //     setCurrentUser({
    //         ...user,
    //     });
    // }

    //login function
    function login(email, password) {
        return loginUser(email, password);
    }

    // logout
    function logout() {
        localStorage.clear();
        setCurrentUser({});
    }

    //value object
    const value = {
        currentUser,
        // signup,
        login,
        logout,
    };
    return (
        <authContext.Provider value={value}>
            {!loading && children}
        </authContext.Provider>
    );
}
