import { useEffect, useState, useContext } from "react";
import Client from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { Data } from "../Data";

export default function AdminVenues(props) {
    const { formData, setFormData } = useContext(Data)

    let navigate = useNavigate()

    const showEvents = (ven) => {
        setFormData({...formData, venue_id: ven.id})
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