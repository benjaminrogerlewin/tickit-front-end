export default function ConcertCard(props) {
  console.log(props.eventContent)
  return (
    <div className="concert-card">
      {props.eventContent && props.eventContent.map((event) => (
        <div>
      <img
        className="concert-card-image"
        src={event.image}
        alt="Concert"
      />
      <h3>{event.artist}</h3>
      <p>Event Date</p>
      </div>
      ))}
    </div>
  );
}
