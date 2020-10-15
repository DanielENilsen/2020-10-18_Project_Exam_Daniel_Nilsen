import React from 'react';
import NavBarAdmin from "../navBarAdmin/NavBarAdmin";


function Admin() { 
    return(
            <div className = "admin">
                <h1 className = "admin__text">Welcome to Admin</h1>
                <NavBarAdmin />                                
            </div>

    );
}

export default Admin;