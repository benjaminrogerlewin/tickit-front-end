import Hero from "./Hero";
import TopTourCard from "./TopTourCard";
import ConcertCard from "./ConcertCard";
import SportCard from "./SportCard";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from 'react';



const Home = (props) => {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  return (
    <div id="home-container">
      <Hero />
      {loginOpen && <Login setOpenLogin={setLoginOpen} />}
      {registerOpen && <SignUp setOpenRegister={setRegisterOpen} />}
      <div id="top-tour-section">
        <h2>Top Tours</h2>
        <div id="top-tour-cards">
          <TopTourCard />
          <TopTourCard />
          {/* <TopTourCard /> */}
          {/* <TopTourCard /> */}
        </div>
      </div>

      <div id="concerts-section">
        <h2>Concerts</h2>
        <div id="concert-cards">
          <ConcertCard />
          <ConcertCard />
          <ConcertCard />
        </div>
      </div>

      <div id="sports-section">
        <h2>Sports</h2>
        <div id="sport-cards">
          <SportCard />
          <SportCard />
          <SportCard />
        </div>
      </div>

      {/* <div>
        {props.venueContent.map((venue, id) => (
          <div key={venue.id}>
            <h2>{venue.artist}</h2>
            <button onClick={() => props.handleDelete(venue.id)}>delete</button>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Home;
