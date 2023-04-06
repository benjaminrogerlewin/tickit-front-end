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
    <div className="pageContainer">
      <div className="body">
        <div className="pageTitle">
          <span>EDIT BLOG</span>
        </div>

        <div className="blogWindow" style={{ paddingTop: "30px" }}>
          <form onSubmit={(e) => props.handleSubmit(e, id)}>
            <label htmlFor="artist" className="homeTitle">
              ARTIST
            </label>
            <br></br>
            <br></br>

            <input
              type="text"
              id="artist"
              name="artist"
              value={props.formData.artist}
              onChange={props.handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>

            <label htmlFor="date" className="homeTitle">
              DATE
            </label>
            <br></br>
            <br></br>

            <input
              type="text"
              id="date"
              name="date"
              value={props.formData.date}
              onChange={props.handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>

            <label htmlFor="time" className="homeTitle">
              TIME
            </label>
            <br></br>
            <br></br>

            <input
              type="text"
              id="time"
              name="time"
              value={props.formData.time}
              onChange={props.handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>

            <label htmlFor="description" className="homeTitle">
              DESCRIPTION
            </label>
            <br></br>
            <br></br>

            <input
              type="text"
              id="description"
              name="description"
              value={props.formData.description}
              onChange={props.handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>

            <label htmlFor="price" className="homeTitle">
              PRICE
            </label>
            <br></br>
            <br></br>

            <input
              type="text"
              id="price"
              name="price"
              value={props.formData.price}
              onChange={props.handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>

            <label htmlFor="ticket_count" className="homeTitle">
              TICKET COUNT
            </label>
            <br></br>
            <br></br>

            <input
              type="text"
              id="ticket_count"
              name="ticket_count"
              value={props.formData.ticket_count}
              onChange={props.handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>

            <label htmlFor="category" className="homeTitle">
              CATEGORY
            </label>
            <br></br>
            <br></br>

            <input
              type="text"
              id="category"
              name="category"
              value={props.formData.category}
              onChange={props.handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>

            <label htmlFor="all_ages" className="homeTitle">
              ALL AGES
            </label>
            <br></br>
            <br></br>

            <input
              type="text"
              id="all_ages"
              name="all_ages"
              value={props.formData.all_ages}
              onChange={props.handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>

            <label htmlFor="image" className="homeTitle">
              IMAGE
            </label>
            <br></br>
            <br></br>

            <input
              type="text"
              id="image"
              name="image"
              value={props.formData.image}
              onChange={props.handleChange}
              className="formInput"
            />
            <br></br>
            <br></br>

            <button type="submit" className="btnLarge" id="btn-create">
              UPDATE
            </button>
          </form>
          {/* <div>
            <h2>{props.updateBlog.title}</h2>
            <p>{props.updateBlog.synopsis}</p>
            <p>{props.updateBlog.review}</p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EventUpdate;
