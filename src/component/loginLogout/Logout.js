import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../authcontext/AuthContext";


function LogOut() { 
    const { logout } = useContext(AuthContext);
    const history = useHistory();

    var LogUserOut = function () {
        logout();
        history.push("/");
    }
    return (
        <>
            <button  className = "logoutButton" onClick = {LogUserOut}>Logout</button>
        </>
    );
}

export default LogOut;