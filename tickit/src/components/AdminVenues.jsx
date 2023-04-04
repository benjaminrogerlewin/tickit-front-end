import { useEffect, useState } from "react";
import Client from "../services/api";
import { Link, useNavigate } from "react-router-dom";

export default function AdminVenues(props) {

    let navigate = useNavigate()

    const showEvents = (ven) => {
        navigate(`${ven.id}`)
    }

    // const [venue, setVenue] = useState([])

    // const getVenue = () => {
    //     Client.get(`/venues`).then((getVenue) => {
    //       setVenue(getVenue.data);
    //     });
    //   };
    
    //   useEffect(() => {
    //     getVenue();
    //   }, []);

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