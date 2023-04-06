export default function Events(props) {
  return (
    <div id="events-main-container">
      <div className="event-cards">
        {props.eventContent.map((ven) => (
          <div className="event-card">
            <div className="event-content">
              <h2>{ven.artist}</h2>
              <p>{ven.date}</p>
              <p>{ven.time}</p>
            </div>
            <img className="event-image" src={ven.image} alt="Concert" />
          </div>
        ))}
      </div>
    </div>
  );
}
