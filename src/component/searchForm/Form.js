import React from 'react';
import {headers,BASE_URL} from "../apiBackend/ApiCall";
import  { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


function SearchForm () { 


    const [display, setDisplay] = useState("none");
    const [allHotel, setCurrectHotel] = useState([]);
    const [hotelCardFilter, setHotelFilter] = useState([]);
    const url =  BASE_URL + "establishments";
    const hotelFecth = { headers };




    useEffect(() => {
        fetch(url,hotelFecth).then((reponse) => reponse.json()).then((hotelJson) => {
            setCurrectHotel(hotelJson);
            setHotelFilter(hotelJson);
        }).catch((error) => console.log(error));
    }, []);

    

    var searchFilter = function(e) {
        const name = e.target.value.toLowerCase();    
        const filteredArray = allHotel.filter(function(char) {
        const nametype = char.name.toLowerCase();    
        if (nametype.startsWith(name)) {        
               return true;
        }
        return false;
        });
            
        setHotelFilter(filteredArray);
    };   

    let dispalyHotels = function () { 
        setDisplay("block");    
       
    }



    return (
        <div className = "search">
            <input className = "search__input"  name = "placeName" onClick = {dispalyHotels}   onChange={data => searchFilter(data)} type="text"  placeholder="Find your booking here" />
             {hotelCardFilter.map(hotel => {
                 return(
                    <div style = {{display}} className = "search__li">                  
                            <li  className = "list-group-item" key={hotel.id}><NavLink to = {`/hotelpage/${hotel.id}`}>{hotel.name}</NavLink></li>
                    </div>                                                       
                    
                     
                 );
             })}
        </div>
    );
}

export default SearchForm;