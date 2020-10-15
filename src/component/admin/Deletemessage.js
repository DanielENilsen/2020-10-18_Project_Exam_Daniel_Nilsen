import React from 'react';
import { BASE_URL, headers, DELETE } from "../apiBackend/ApiCall";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import Button from "react-bootstrap/Button";

// Some of this codes are from https://github.com/javascript-repositories/hotel-api-example-site/blob/master/src/components/admin/DeleteHotel.js

function DeleteMessage(props) {

    const history = useHistory();
    function checkDelete() {
        confirmAlert({
            title: "Sure you want to delete this message ?",
            buttons: [
                {
                    label: "yes",
                    onClick: () => deletemessage(),
                },
                {
                    label: "no",
                },
            ],
        });
    }

    var deletemessage =  async function () {        
        const url = `${BASE_URL}contacts/${props.id}`;
        const options = { headers, method: DELETE };
        await fetch(url, options);
        history.push("/admin/message");
    }

    return (
        <Button className = "deleteMessage" onClick={checkDelete}>Delete</Button>
    );
}

export default DeleteMessage;