export default function Events(props) {
  return (
    <div id="events-main-container">
      {props.eventContent.map((ven) => (
        <div className="event-cards">
          <div className="event-card">
            <h2>{ven.artist}</h2>
            <p>{ven.date}</p>
            <p>{ven.time}</p>
            <img className="event-image" src={ven.image} alt="Concert" />
          </div>
        </div>
      ))}
    </div>
  );
}
