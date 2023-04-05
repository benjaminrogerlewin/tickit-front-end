import { useEffect, useState } from "react";
import Client from "../services/api";
import { Link, useNavigate } from "react-router-dom";

export default function AdminVenues(props) {
  let navigate = useNavigate();

  const showEvents = (ven) => {
    console.log(ven.id);
    navigate(`${ven.id}`);
  };

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
