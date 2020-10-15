import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../authcontext/AuthContext";

function LoginSystem() {
    const { register, handleSubmit } = useForm();
    const { logInUser } = useContext(AuthContext);
    const history = useHistory();

    var onSubmit = function onSubmit(data) {
        if(data.username === "Admin" && data.password === "Admin") {
            logInUser(data.username, data.password);
            history.push("/admin");
        } else {
           console.log("Error");
        }       
    }


    return (
        <div className = "col-lg-4 col-xl-4 formCLa">  
            <Form  className = "addNewHOtel" onSubmit={handleSubmit(onSubmit)}>
                <h1 className = "col-lg-12 col-xl-12 addNewHOtel__text">Please Login </h1>
                <Form.Group>
                    <Form.Control className = "addNewHOtel__input" name="username" type="text" placeholder="Enter your username" ref={register} />
                    <Form.Control className = "addNewHOtel__input" name="password" type="password" placeholder="Enter your username" ref={register} />                               
                </Form.Group>
                <Button className="addNewHOtel__submit btn btn-secondary" type="submit">Submit</Button>
            </Form>
        </div>
    );
}

export default LoginSystem;

