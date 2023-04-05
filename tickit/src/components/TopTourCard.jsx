export default function TopTourCard(props) {
  return (
    <div className="top-tour-card">
      <div className="top-tour-card-content">
        <h3>{props.eventContent[2].artist}</h3>
        <p>{props.eventContent[2].date}</p>
      </div>
      <img
        className="top-tour-card-image"
        src={props.eventContent[2].image}
        alt="Top Tour"
      />
    </div>
  );
}
