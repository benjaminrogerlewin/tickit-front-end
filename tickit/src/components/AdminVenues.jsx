import { useEffect, useState } from "react";
import Client from "../services/api";
import { Link, useNavigate } from "react-router-dom";

export default function AdminVenues(props) {

    let navigate = useNavigate()

    const showEvents = (ven) => {
        console.log(ven.id)
        navigate(`${ven.id}`)
    }

    return(
        <>
            <h1>this is venues</h1>
            <div>
                {props.venue.map((ven) => (
                    <div onClick={() => showEvents(ven)} key={ven.id}>
                       <span>{ven.name}</span> 
                    </div>
                ))}
            </div>
        </>
    )
}