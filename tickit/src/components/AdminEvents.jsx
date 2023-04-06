import { useEffect, useState, useContext } from "react";
import Client from "../services/api";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Data } from "../Data";

export default function AdminEvents(props) {
  const { formData, setFormData } = useContext(Data);
  const [event, setEvent] = useState(null);

  let { id } = useParams();

  let navigate = useNavigate();

  // const showEvent = (e) => {
  //   navigate(`${e.id}`);
  // };

  const showEvent = (e) => {
    console.log(e);
    //   setFormData({...formData, event_id: e.id, venue_id: e.venue_id})
    const formDataString = JSON.stringify(formData);

    localStorage.setItem("formData", formDataString);
    navigate(`${e.id}`);
  };
  const local = () => {
    const formDataString = JSON.stringify(formData);
    localStorage.setItem("formData", formDataString);
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
    <div className="admin-events-main-container">
      <Link to="/create">
        <button className="primary-tonal-button" onClick={() => local()}>
          Create
        </button>
      </Link>
      <div id="admin-events-container">
        <div key={event.id}>
          {event.events.map((e, id) => (
            <div className="admin-event-card">
              <div className="admin-event-card-content">
                <div>
                  <h2>{e.artist}</h2>
                  <p>Date:{e.date}</p>
                  <p>Time: {e.time}</p>
                  <p>Description: {e.description}</p>
                  <p>Price: ${e.price}</p>
                  <p>Ticke Count: {e.ticket_count}</p>
                  <p> Category: {e.category}</p>
                </div>
                <img className="event-image" src={e.image} alt="Event" />
              </div>

              <div>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
