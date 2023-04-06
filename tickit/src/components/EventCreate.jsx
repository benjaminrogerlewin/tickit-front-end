import { useEffect, useState, useContext } from "react";
import Client from "../services/api";
import { Data } from "../Data";

export default function EventCreate(props) {
  const { f, setf } = useContext(Data);

  const [createEvent, setCreateEvent] = useState([]);
  const [formData, setFormData] = useState({
    artist: "",
    date: "",
    time: "",
    description: "",
    price: "",
    ticket_count: "",
    category: "",
    all_ages: "",

    venue_id: JSON.parse(localStorage.getItem("formData"))?.venue_id || "101",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const formDataString = JSON.stringify(formData);

    localStorage.setItem("formData", formDataString);

    e.preventDefault();
    console.log(formData);
    const response = await Client.post(`/events`, formData);
    console.log(response.data);
    setCreateEvent(response.data);
  };

  return (
    <div className="event-create-container">
      <h3>Create a new event</h3>

      <form className="event-create-form" onSubmit={handleSubmit}>
        <div className="event-form-input">
          <label htmlFor="title">
            <h5>ARTIST</h5>
          </label>
          <input
            required
            type="text"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            className="formInput"
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="synopsis">
            <h5>DATE</h5>
          </label>
          <input
            required
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="formTextArea"
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="time">
            <h5>TIME</h5>
          </label>
          <input
            required
            id="time"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="formTextArea"
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="description">
            <h5>DESCRIPTION</h5>
          </label>
          <textarea
            required
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="formTextArea"
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="price">
            <h5>PRICE</h5>
          </label>
          <input
            required
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="formInput"
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="ticket_count">
            <h5>TICKET COUNT</h5>
          </label>
          <input
            required
            type="text"
            id="ticket_count"
            name="ticket_count"
            value={formData.ticket_count}
            onChange={handleChange}
            className="formInput"
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="category">
            <h5>CATEGORY</h5>
          </label>
          <input
            required
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="formInput"
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="all_ages">
            <h5>ALL AGES</h5>
          </label>
          <input
            required
            type="text"
            id="all_ages"
            name="all_ages"
            value={formData.all_ages}
            onChange={handleChange}
            className="formInput"
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="image">
            <h5>IMAGE</h5>
          </label>

          <textarea
            required
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <button className="primary-button" type="submit">
          Create event
        </button>
      </form>
      {createEvent && (
        <div>
          <h2>{createEvent.artist}</h2>
          <p>{createEvent.date}</p>
          <p>{createEvent.time}</p>
          <p>{createEvent.description}</p>
          <p>{createEvent.price}</p>
          <p>{createEvent.ticket_count}</p>
          <p>{createEvent.category}</p>
          <p>{createEvent.all_ages}</p>
        </div>
      )}
    </div>
  );
}
