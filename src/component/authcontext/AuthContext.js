import React, { createContext, useState } from "react";




const AuthContext = createContext();

const SecureAuthSystem = ({ children  }) => {
    const checkExistingUser = localStorage.getItem("user") || null;
    const chechExistingPassword = localStorage.getItem("password") || null;
    const [user, setUser] = useState(checkExistingUser);
    const [password, setPassword] = useState(chechExistingPassword);

    function logInUser(username,password) {
        localStorage.setItem("user", JSON.stringify(username));
        localStorage.setItem("password", JSON.stringify(password));

        setUser(username);
        setPassword(password);
    }

    function logout() {
        setUser(null);
        setPassword(null);
        localStorage.removeItem("user");
        localStorage.removeItem("password");

    } 
    return <AuthContext.Provider value={{ user, password, logInUser, logout }}>{children }</AuthContext.Provider>;
};

export { AuthContext, SecureAuthSystem };
