import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useParams, useNavigate } from "react-router-dom";
import Client from "./services/api";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Events from "./components/Events";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AdminEvents from "./components/AdminEvents";
import EventCreate from "./components/EventCreate";
import EventUpdate from "./components/EventUpdate";
import AdminVenues from "./components/AdminVenues";
import Footer from "./components/Footer";

function App() {
  const [eventContent, setEventContent] = useState([]);
  const [venue, setVenue] = useState([]);
  const [formData, setFormData] = useState({
    artist: "",
    date: "",
    time: "",
    description: "",
    price: "",
    ticket_count: "",
    category: "",
    all_ages: "",
    image: "",
    venue_id: 3
  });

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
      navigate(`/admin`)
    });
  };

  let navigate = useNavigate();

  const showEvents = (ven) => {
    navigate(`${ven.id}`);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e, id) => {
    console.log('id:', id)
    e.preventDefault();
    Client.put(`/events/${id}`, formData).then(() => {
      navigate("/admin");
      getContent();
    });
  };

  return (
    <div className="App">
      <Nav />
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/events"
          element={<Events eventContent={eventContent} />}
        />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        <Route
          path="/admin"
          element={
            <AdminVenues
              eventContent={eventContent}
              venue={venue}
              showEvents={showEvents}
            />
          }
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
          path="/admin/:id/:id"
          element={
            <EventUpdate
              eventContent={eventContent}
              venue={venue}
              handleSubmit={handleSubmit}
              handleChange={handleChange}
              formData={formData}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
<<<<<<<<< Temporary merge branch 1


=========
>>>>>>>>> Temporary merge branch 2
