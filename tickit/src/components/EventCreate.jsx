import { useState } from "react";
import Client from "../services/api";

export default function EventCreate(props) {
 
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
    venue_id: 3,
    image: ""
  });

  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await Client.post(`/events`, formData);
    console.log(response.data);
    setCreateEvent(response.data);
  };

  return (
    <div className="pageContainer">
      <div className="body">
        <div className="pageTitle">
          <span>CREATE NEW EVENT</span>
        </div>

        <div className="blogWindow" style={{ paddingTop: "30px" }}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="title" className="homeTitle" style={{}}>
              ARTIST
            </label>
            <br></br> <br></br>
            <input
              required
              type="text"
              id="artist"
              name="artist"
              value={formData.artist}
              onChange={handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>
            <div style={{ justifyContent: "left" }}>
              <label htmlFor="synopsis" className="homeTitle">
                DATE
              </label>
            </div>
            <br></br>
            <br></br>
            <textarea
              required
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="formTextArea"
            />
            <br></br>
            <br></br>
            <label htmlFor="time" className="homeTitle">
              TIME
            </label>
            <br></br>
            <br></br>
            <textarea
              required
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="formTextArea"
            />
            <br></br>
            <br></br>
            <label htmlFor="description" className="homeTitle">
              DESCRIPTION
            </label>
            <br></br>
            <br></br>
            <textarea
              required
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="formTextArea"
            />
            <br></br>
            <label htmlFor="price" className="homeTitle" style={{}}>
              PRICE
            </label>
            <br></br> <br></br>
            <input
              required
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>
            <label htmlFor="ticket_count" className="homeTitle" style={{}}>
              TICKET COUNT
            </label>
            <br></br> <br></br>
            <input
              required
              type="text"
              id="ticket_count"
              name="ticket_count"
              value={formData.ticket_count}
              onChange={handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>
            <label htmlFor="category" className="homeTitle" style={{}}>
              CATEGORY
            </label>
            <br></br> <br></br>
            <input
              required
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>
            <label htmlFor="all_ages" className="homeTitle" style={{}}>
              ALL AGES
            </label>
            <br></br> <br></br>
            <input
              required
              type="text"
              id="all_ages"
              name="all_ages"
              value={formData.all_ages}
              onChange={handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>
            <label htmlFor="image" className="homeTitle">
              IMAGE
            </label>
            <br></br>
            <br></br>
            <textarea
              required
              id="image"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="formTextArea"
            />
            <br></br>
            <br></br>
            <button className="btnLarge" id="btn-create" type="submit">
              PUBLISH
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
      </div>
    </div>
  );
}
