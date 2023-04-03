import logo from './logo.svg';
import './App.css';
import { Routes, Route, useParams} from 'react-router-dom'
import Client from './services/api'
import { useEffect, useState } from 'react';
import Home from './components/Home'
import Nav from './components/Nav'
import Events from './components/Events'
import Login from './components/Login'
import SignUp from './components/SignUp';
import Cart from './components/Cart'

function App() {

  const [venueContent, setVenueContent] = useState([])

  const { id } = useParams();

  const getContent = () => {
    Client.get(`/events`).then((getContent) => {
      setVenueContent(getContent.data);
    });
  };

  useEffect(() => {
    getContent();
  }, []);

  const handleDelete = (id) => {
    Client.delete(`/events/${id}`).then(() => {
      getContent();
    });
    console.log(id)
  };


  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home venueContent={venueContent} handleDelete={handleDelete} />} />
        <Route path="/events" element={<Events />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
