export default function TopTourCard(props) {
  return (
    <div className="top-tour-card">
      <div className="top-tour-card-content">
        <h3>Event Name</h3>
        <p>Event Date</p>
      </div>
      <img
        className="top-tour-card-image"
        src="https://via.placeholder.com/600x300?text=Top+Tour+Image"
        alt="Top Tour"
      />
    </div>
  );
}
