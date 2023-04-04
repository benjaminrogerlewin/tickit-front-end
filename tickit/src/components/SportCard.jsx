export default function SportCard() {
  return (
    <div className="sport-card">
      <img
        className="sport-card-image"
        src="https://via.placeholder.com/600x800?text=Sport+Image"
        alt="Sport"
      />
      <h3>Event Name</h3>
      <p>Event Date</p>
      <button className="primary-button">See tickets</button>
    </div>
  );
}
