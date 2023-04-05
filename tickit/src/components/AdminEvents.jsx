import { useEffect, useState } from "react";
import Client from "../services/api";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function AdminEvents(props) {
  const [event, setEvent] = useState(null);

  let { id } = useParams();

  let navigate = useNavigate();

  const showEvent = (e) => {
    navigate(`${e.id}`);
  };

  useEffect(() => {
    if (!id) {
      return;
    }

    let selectedVenue = props.venue.find((event) => event.id === parseInt(id));
    setEvent(selectedVenue);
  }, [props.venue, id]);

  if (!event || !props.venue) {
    return <div>Loading...</div>;
  }

    console.log(event)

    return (
        <>
            <Link to='/create'><button>Create</button></Link>
            <div>
                <div key={event.id}>
                    {event.events.map((e, id) => (
                      <div>
                    <div>
                       <h1>{e.artist}</h1> 
                       <img src={e.image} />
                    </div>
                    <button onClick={() => showEvent(e)}>Edit</button>
                    <button onClick={() => props.handleDelete(e.id)}>delete</button>
                    </div>
                ))}
                   
                    
                </div>
            </div>
        </>
    );
}
