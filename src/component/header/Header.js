import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../home/Home";
import Login from "../loginLogout/Login";
import Admin from "../admin/Admin";
import ProtectedRoute from "../routes/routes";
import { SecureAuthSystem } from "../authcontext/AuthContext";
import Navbar from "../Navbar/Navbar";
import ViewALL from "../viewAll/ViewAll";
import Logo from "../../img/Logo.png";
import ContactUS from "../contactus/ContactUs";
import HotelCard from "../hotelCardSpec/HotelCard";


function HeaderFrom () { 
        
        return( 
            <SecureAuthSystem>
                <Router>
                    <div className = "navbarinner">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container">
                            
                                <img src={Logo} className = "navbarinner__image"  alt={"Logo"} />                          
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navRes" aria-controls="navRes" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navRes">                           
                                <Navbar />                            
                            </div>  
                        </div>
                    </nav>
                </div>
                <Switch>
                    <Route path="/" exact component={HomePage} />                   
                    <Route path="/viewALL" exact component={ViewALL} />
                    <Route path="/contactus" exact component={ContactUS} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/hotelpage/:id" exact component={HotelCard} />
                    <ProtectedRoute path="/admin" exact component={Admin} />                    
                </Switch>
                </Router>
             </SecureAuthSystem>
           

        );  
    
}

export default HeaderFrom;
