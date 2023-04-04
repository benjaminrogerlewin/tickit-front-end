import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useParams } from "react-router-dom";
import Client from "./services/api";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Events from "./components/Events";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import AdminEvents from "./components/AdminEvents";
import EventCreate from "./components/EventCreate";
import EventUpdate from "./components/EventUpdate";
import AdminVenues from "./components/AdminVenues";

function App() {
  const [eventContent, setEventContent] = useState([]);
  const [venue, setVenue] = useState([]);
  const getVenue = () => {
    Client.get(`/venues`).then((getVenue) => {
      setVenue(getVenue.data);
    });
  };

  useEffect(() => {
    getVenue();
  }, []);

  // Read Data
  const getContent = () => {
    Client.get(`/events`).then((getContent) => {
      setEventContent(getContent.data);
    });
  };

  useEffect(() => {
    getContent();
  }, []);

  const handleDelete = (id) => {
    Client.delete(`/events/${id}`).then(() => {
      getContent();
    });
  };

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events eventContent={eventContent}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/admin"
          element={<AdminVenues eventContent={eventContent} venue={venue} />}
        />
        <Route
          path="/admin/:id"
          element={
            <AdminEvents
              eventContent={eventContent}
              handleDelete={handleDelete}
              venue={venue}
            />
          }
        />
        <Route
          path="/create"
          element={<EventCreate eventContent={eventContent} />}
        />
        <Route
          path="/update"
          element={<EventUpdate eventContent={eventContent} />}
        />
      </Routes>
    </div>
  );
}

export default App;
