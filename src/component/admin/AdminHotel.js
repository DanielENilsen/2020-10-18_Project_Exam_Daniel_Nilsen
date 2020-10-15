import React, { useState, useEffect }from 'react';
import {headers, BASE_URL} from "../apiBackend/ApiCall";
import { NavLink } from "react-router-dom";

function AdminHotel() { 
    const [allHote, SetCurrectHotel] = useState([]);
    const url = `${BASE_URL}establishments`;
    const hotelFecth = { headers };

    useEffect(() => {
        fetch(url,hotelFecth).then((reponse) => reponse.json()).then((hotelJson) => 
            SetCurrectHotel(hotelJson)).catch((error) => console.log(error));
    }, []);


    return (
        <div className = "innerBox">
            <div className = "listApp">       
                {allHote.map((hotel) => {
                    return(                          
                        <ul className="list-group  listApp__app">
                            <li  className = "list-group-item listApp__list" key={hotel.id}><NavLink to={`/admin/hotels/edit/${hotel.id}`}>{hotel.name}</NavLink></li>
                        </ul>                                                         
                    );
            })}
                        
            </div>  
        </div>              
     
    );


}
   
export default AdminHotel;