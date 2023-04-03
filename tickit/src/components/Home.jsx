const Home = (props) => {
  return (
    <>
      <h1>Hello</h1>
      <div>
        {props.venueContent.map((venue, id) => (
          <div key={venue.id}>
            <h2>{venue.artist}</h2>
            <button onClick={() => props.handleDelete(venue.id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
