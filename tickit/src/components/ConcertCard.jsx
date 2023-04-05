export default function ConcertCard(props) {
  return (
    <div id="concert-cards">
      {props.eventContent &&
        props.eventContent.map((event) => (
          <div className="concert-card">
            <img
              className="concert-card-image"
              src={event.image}
              alt="Concert"
            />
            <h3>{event.artist}</h3>
            <p>
              {event.date} at {event.time} PM
            </p>
          </div>
        ))}
    </div>
  );
}
