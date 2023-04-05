import Hero from "./Hero";
import TopTourCard from "./TopTourCard";
import ConcertCard from "./ConcertCard";
import SportCard from "./SportCard";

const Home = (props) => {
  return (
    <div id="home-container">
      <Hero />

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
