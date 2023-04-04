import Hero from "./Hero";

const Home = (props) => {
  return (
    <div id="home-container">
      <Hero />
      <div>
        {props.venueContent.map((venue, id) => (
          <div key={venue.id}>
            <h2>{venue.artist}</h2>
            <button onClick={() => props.handleDelete(venue.id)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
