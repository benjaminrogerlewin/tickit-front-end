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

  console.log(event);

  return (
    <div id="events-main-container">
      <Link to="/create">
        <button className="primary-tonal-button">Create</button>
      </Link>
      <div id="events-container">
        <div key={event.id}>
          {event.events.map((e, id) => (
            <div className="event-card">
              <h2>{e.artist}</h2>
              <p>Date:{e.date}</p>
              <p>Time: {e.time}</p>
              <p>Description: {e.description}</p>
              <p>Price: ${e.price}</p>
              <p>Ticke Count: {e.ticket_count}</p>
              <p> Category: {e.category}</p>
              <img className="event-image" src={e.image} alt="Event" />
              <button className="primary-button" onClick={() => showEvent(e)}>
                Edit
              </button>
              <button
                className="link-button"
                onClick={() => props.handleDelete(e.id)}
              >
                delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}