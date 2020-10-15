import React from 'react';
import { BrowserRouter as Router, Switch,Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { SecureAuthSystem } from "../authcontext/AuthContext";
import ProtectedRoute from "../routes/routes";
import AdminHotel from '../admin/AdminHotel';
import AddHotel from "../admin/addhotel";
import EdithHotel from "../admin/edithHotel";
import AdminContact from "../admin/adminContact";





function NavBarAdmin() { 
    return (
        <SecureAuthSystem>
            <Router>
                <div className = "headerLink">
                    <NavLink className = "headerLink__link" to="/listHotel">Edit Hotels</NavLink>
                    <NavLink className = "headerLink__link" to="/massage">Meassages</NavLink>                
                    <NavLink className = "headerLink__link" to="/addhotel">Add Hotels</NavLink>                    
                </div>            
            <Switch>             
                <ProtectedRoute path="/listHotel" exact component={AdminHotel} />
                <ProtectedRoute path="/addhotel" exact component={AddHotel} />  
                <ProtectedRoute path="/massage" exact component={AdminContact} />  
                <ProtectedRoute path="/admin/hotels/edit/:id" exact component={EdithHotel} /> 
                <Redirect to="/" />
            </Switch>
            </Router>  
        </SecureAuthSystem> 
    );
}

export default NavBarAdmin;