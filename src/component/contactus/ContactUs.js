import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { BASE_URL,headers } from '../apiBackend/ApiCall';

function ContactUS() { 

    const history = useHistory();
    const { register, handleSubmit } = useForm();

    var onSubmit = async function (data) {
        const createURl = `${BASE_URL}contacts`;
        const contactPOST = { headers, method: "POST", body: JSON.stringify(data)};        
        await fetch(createURl, contactPOST)
        history.push("/");
    }


    return(
        <div className = "col-md-8 col-lg-5 col-xl-5 formCLa">           
            <Form onSubmit={handleSubmit(onSubmit)}className= "addNewHOtel">
            <h6 className = "col-lg-12 col-xl-12 addNewHOtel__text">Feel free to send us a message </h6>
                <Form.Control className= "addNewHOtel__input" name="name"  placeholder="Name" ref={register} />
                <Form.Control className= "addNewHOtel__input" name="email"  placeholder="Email" ref={register} />
                <Form.Control className= "addNewHOtel__textbox" as="textarea" rows="3" name="message" placeholder="Your meassage" ref={register} />
                <Button className="addNewHOtel__submit btn btn-secondary" type="submit">Submit</Button>                        
            </Form>
        </div>
            
    );

}

export default ContactUS;