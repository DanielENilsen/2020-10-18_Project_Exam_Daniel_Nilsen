import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../authcontext/AuthContext";
import LogOut from "../loginLogout/Logout";
import ListGroup from 'react-bootstrap/ListGroup';


function Navbar() { 
    const { user } = useContext(AuthContext);

    return (
      
        <ul className="navbar-nav ml-auto">        
            <ListGroup className="nav-item">
                <NavLink className = "nav-link" to = "/">Home</NavLink>
            </ListGroup>
            <ListGroup className="nav-item">
                <NavLink className = "nav-link" to = "/viewALL">View all</NavLink>
            </ListGroup>
            <ListGroup className="nav-item">
            <   NavLink className = "nav-link" to = "/contactus">Contact us</NavLink>
            </ListGroup>
            
            {user ? (
                <>
                <NavLink  className = "nav-link" to = "/admin">Admin</NavLink>
                <LogOut />
                </>  
            ):(<NavLink className = "nav-link" to = "/login">login</NavLink>  
            )}             
      </ul>
    );
}

export default Navbar;









