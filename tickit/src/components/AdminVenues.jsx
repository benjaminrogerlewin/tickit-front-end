import { useEffect, useState, useContext } from "react";
import Client from "../services/api";
import { Link, useNavigate } from "react-router-dom";
import { Data } from "../Data";

export default function AdminVenues(props) {

    const { formData, setFormData } = useContext(Data)

  let navigate = useNavigate();


 
    const showEvents = (ven) => {
        setFormData({...formData, venue_id: ven.id})
        navigate(`${ven.id}`)
    }

  

  return (
    <div id="venues-container">
      <h1>Venues</h1>
      <div id="venue-cards-container">
        {props.venue.map((ven) => (
          <div
            className="venue-card"
            onClick={() => showEvents(ven)}
            key={ven.id}
          >
            <h3>{ven.name}</h3>
            <p>Address: {ven.address}</p>
            <p>Phone: {ven.phone}</p>
            <p>Capacity: {ven.capacity}</p>
            {/* <p>Accessibility: {ven.accessible}</p> */}
            <p>Parking: {ven.parking}</p>
            <p>Hours: {ven.hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

