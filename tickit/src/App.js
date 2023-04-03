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
      <Nav />
      <Routes>
        <Route path ="/" element={<Main/>}></Route>
        <Route path ="/Events" element={<Events/>}></Route>
      </Routes>
      <Footer />
      </div>
    );
  }
  

export default App;
