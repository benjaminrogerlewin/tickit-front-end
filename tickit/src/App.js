import logo from './logo.svg';
import './App.css';
import { Routes, Route, useParams} from 'react-router-dom'
import Client from './services/api'
import { useEffect, useState } from 'react';

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
      <h1>Hello</h1>
      <div>
        {venueContent.map((venue, id) => (
          <div key={venue.id}>
            <h2>{venue.artist}</h2>
            <button onClick={() => handleDelete(venue.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
