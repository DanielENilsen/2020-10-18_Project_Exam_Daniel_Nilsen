import React from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import Button from "react-bootstrap/Button";
import { BASE_URL, headers, DELETE } from "../apiBackend/ApiCall";
import "react-confirm-alert/src/react-confirm-alert.css";

// Some of this codes are from https://github.com/javascript-repositories/hotel-api-example-site/blob/master/src/components/admin/DeleteHotel.js

function DeleteHotel(props) {
    const history = useHistory();

    function checkDelete() {
        confirmAlert({
            title: "Sure you want to delete this Hotel ?",
            buttons: [
                {
                    label: "yes",
                    onClick: () => deleteHotel(),
                },
                {
                    label: "no",
                },
            ],
        });
    }

    var deleteHotel = async function () {
        const url = `${BASE_URL}establishments/${props.id}`;
        const options = { headers, method: DELETE };
        await fetch(url, options);
        history.push("/admin/hotels");
    }

    return (
        <Button className = "edithForm__button" onClick={checkDelete}>Delete</Button>
    );
}

export default DeleteHotel;
