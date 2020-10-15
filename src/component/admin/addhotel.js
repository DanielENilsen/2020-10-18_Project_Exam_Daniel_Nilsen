import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { BASE_URL, headers } from "../apiBackend/ApiCall";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";



function AddHotel() {   

    const historyLog = useHistory();
    const { register, handleSubmit} = useForm();
    
    var onSubmit = async function (data) {
        const urlString = `${BASE_URL}establishments`;     
        const POSTSTRING = { headers, method: "POST", body: JSON.stringify(data)};       

        await fetch(urlString, POSTSTRING);        
        historyLog.push("/listHotel");
    }

    return (
      
        <div className = "edithForm">
            <Form onSubmit={handleSubmit(onSubmit)}  className= "loginForm">
                <h1 className = "edithForm__header">Add New Hotel</h1>
                <Form.Control className= "loginForm__input" name="name" type = "text" placeholder="Hotel Name" ref={register} />
                <Form.Control className= "loginForm__input" name="email" type = "email" placeholder="Email" ref={register} />
                <Form.Control className= "loginForm__input" name="image" type = "text" placeholder="Image" ref={register} />
                <Form.Control className= "loginForm__input" name="description" type = "text" placeholder="Description" ref={register} />
                <Form.Control className= "loginForm__input" name="price" type = "text" placeholder="Price" ref={register} />
                <Form.Control className= "loginForm__input" name="maxGuests" type = "text" placeholder="Rooms" ref={register} />
                <Form.Group className = "edithForm__group">
                     <Button className="loginForm__submit" type="submit">Submit</Button> 
                </Form.Group>                       
            </Form>            
        </div>
    );
}

export default AddHotel;