import React, { useState, useEffect } from "react";
import { BASE_URL, headers } from "../apiBackend/ApiCall";
import { useParams } from "react-router-dom";


function HotelCard() {
    let { id } = useParams();
    const options = { headers };
    const fetchUrl = `${BASE_URL}establishments/${id}`;
    const [hotel, setHotel] = useState([]); 

    useEffect(() => {
        fetch(fetchUrl, options).then((response) => response.json())
        .then((json) => {
            setHotel(json)
        }).catch((error) => console.log(error));
    }, []);

    return (    
        <div className = "hotelSpec">
            <div className = "innerHhtml">
                <img className = "hotelSpec__image" src={hotel.image} alt ={"Image of a hotel"} />  
            </div>                   
            <div>
                <h1 className = "hotelSpec__headerText ">{hotel.name}</h1>
                <div>
                    <p className = "hotelSpec__text">{hotel.description}</p>
                        <div className = "conteiner-fluid">                                   
                            <div className = "row">
                                <h6 className = "hotelSpec__info">Price: <span className="hotelSpec__span">{hotel.price} kr</span></h6>
                                <h6 className = "hotelSpec__info">Rooms: <span className="hotelSpec__span"> {hotel.maxGuests}</span></h6>
                                    {hotel.selfCatering ?(
                                        <h6 className = "hotelSpec__info"> Self-catering:  <span className="hotelSpec__span">Yes</span></h6>

                                    ):(
                                        <h6 className = "hotelSpec__info">Self-catering: <span className="hotelSpec__span">No</span></h6>

                                    )}                                                                                                                                        
                            </div>
                        </div>  
                            <h6 className = "hotelSpec__info hotelSpec__email">Email: <span className="hotelSpec__span">{hotel.email}</span></h6>
                        </div>                             
                </div>                    
        </div>
                        
       
    );
}


export default HotelCard;



