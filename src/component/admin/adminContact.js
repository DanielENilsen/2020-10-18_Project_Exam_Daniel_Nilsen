import React, { useState, useEffect }from 'react';
import {headers, BASE_URL} from "../apiBackend/ApiCall";
import DeleteMessage from "./Deletemessage";



function AdminContact() {
        
           
    const [masseage,setMassage] = useState([]);
    const Url = `${BASE_URL}contacts`;
    const masseageFetch = { headers };

    useEffect(() => {
        fetch(Url,masseageFetch).then((reponse) => reponse.json()).then((hotelJson) => setMassage(hotelJson)
        ).catch((error) => console.log(error));
    }, []);

    
   return (
        <div className = "innerBox">
            <div className = "meassageHotel">
          
                {masseage.map((massage) => {
                    return (
                       <ul key={massage.id} className="list-group meassageHotel__box">
                           <div className = "list-group-item">                               
                                <h3  className = "meassageHotel__header">{massage.name}</h3>
                                <div className = "meassageHotel__inner">
                                    <h6 className = "meassageHotel__email">{massage.email}</h6>
                                    <p className = "meassageHotel__text">{massage.message}</p>
                                </div>      
                                <DeleteMessage id = {massage.id}  />                  
                            </div>
                        </ul>
                    );
                })} 
            </div>   
       </div>
   );
}
export default AdminContact;



