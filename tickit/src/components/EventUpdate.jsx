import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Client from "../services/api";

const EventUpdate = (props) => {
  const [event, setEvent] = useState("");

  let { id } = useParams();

  useEffect(() => {
    const getSelectedEvent = async () => {
      console.log(props.eventContent);
      if (props.eventContent && props.eventContent[id]) {
        let selectedEvent = props.eventContent.find(
          (event) => event.id === parseInt(id)
        );
        setEvent(selectedEvent);
        console.log(event);
      }
    };
    getSelectedEvent();
  }, [props.movieContent]);

  return (
    <div className="event-create-container">
      <h3>Update event</h3>

      <form
        className="event-create-form"
        onSubmit={(e) => props.handleSubmit(e, id)}
      >
        <div className="event-form-input">
          <label htmlFor="artist">
            <h5>ARTIST</h5>
          </label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={props.formData.artist}
            onChange={props.handleChange}
            className="formInput"
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="date">
            <h5>DATE</h5>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={props.formData.date}
            onChange={props.handleChange}
            className="formInput"
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="time">
            <h5>TIME</h5>
          </label>
          <input
            type="time"
            id="time"
            name="time"
            value={props.formData.time}
            onChange={props.handleChange}
            className="formInput"
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="description">
            <h5>DESCRIPTION</h5>
          </label>
          <textarea
            id="description"
            name="description"
            value={props.formData.description}
            onChange={props.handleChange}
            className="formInput"
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="price">
            <h5>PRICE</h5>
          </label>
          <input
            type="text"
            id="price"
            name="price"
            value={props.formData.price}
            onChange={props.handleChange}
            className="formInput"
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="ticket_count">
            <h5>TICKET COUNT</h5>
          </label>
          <input
            type="text"
            id="ticket_count"
            name="ticket_count"
            value={props.formData.ticket_count}
            onChange={props.handleChange}
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="category">
            <h5>CATEGORY</h5>
          </label>

          <input
            type="text"
            id="category"
            name="category"
            value={props.formData.category}
            onChange={props.handleChange}
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="all_ages">
            <h5>ALL AGES</h5>
          </label>
          <input
            type="text"
            id="all_ages"
            name="all_ages"
            value={props.formData.all_ages}
            onChange={props.handleChange}
          />
        </div>

        <div className="event-form-input">
          <label htmlFor="image">
            <h5>IMAGE</h5>
          </label>
          <textarea
            id="image"
            name="image"
            value={props.formData.image}
            onChange={props.handleChange}
          />
        </div>

        <button className="primary-button" type="submit">
          Update event
        </button>
      </form>
      {/* <div>
            <h2>{props.updateBlog.title}</h2>
            <p>{props.updateBlog.synopsis}</p>
            <p>{props.updateBlog.review}</p>
          </div> */}
    </div>
  );
};

export default EventUpdate;
