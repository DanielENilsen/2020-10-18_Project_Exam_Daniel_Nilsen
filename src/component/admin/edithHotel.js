import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory } from "react-router-dom";
import { BASE_URL, headers, PATCH } from "../apiBackend/ApiCall";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DeleteHotel from "./DeleteHotel";



function EdithHotel() {
    
    var createDefaultState = {
        name: "",
        email: "",
        image: "",
        price: "",
        maxGuests: "",
    };
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [hotel, setHotel] = useState(createDefaultState);

    var { id } = useParams();
    const options = { headers };
    const url = `${BASE_URL}establishments/${id}`;


    useEffect(() => {
        fetch(url, options).then((response) => response.json()).then((json) =>setHotel(json)).catch((error) => console.log(error));
    }, []);

    var onSubmit = async function onSubmit(data) {
        const updateOptions = { headers, method: PATCH, body: JSON.stringify(data) };
        await fetch(url, updateOptions);
        history.push("/admin/hotels");
    }

    return (
        <div className = "edithForm">     
            <Form onSubmit={handleSubmit(onSubmit)}>
                <h3 className = "edithForm__header">Edit Hotel</h3>
                <Form.Group>
                    <Form.Label className = "edithForm__label" >Name</Form.Label>
                    <Form.Control  className = "edithForm__input" name="name" defaultValue={hotel.name} placeholder="Enter a name for the hotel" ref={register} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className = "edithForm__label" >Email</Form.Label>
                    <Form.Control className = "edithForm__input" name="email" defaultValue={hotel.email} placeholder="Enter an email address" ref={register} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className = "edithForm__label">Picture</Form.Label>
                    <Form.Control className = "edithForm__input" name="image" defaultValue={hotel.image} ref={register} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className = "edithForm__label" >Description</Form.Label>
                    <Form.Control className = "edithForm__textArea" name="description" as="textarea" defaultValue={hotel.description} ref={register} />
                </Form.Group>
                <Form.Group>
                    <Form.Label className = "edithForm__label" >Rooms</Form.Label>
                    <Form.Control className = "edithForm__textArea" name="maxGuests" defaultValue={hotel.maxGuests} ref={register} />
                </Form.Group>
                <Form.Group className = "edithForm__group">
                    <Button  className = "edithForm__button" type="submit">Update</Button>
                    <DeleteHotel id={id} />  
                </Form.Group>
            </Form>                        
        </div>
    );
}

export default EdithHotel;