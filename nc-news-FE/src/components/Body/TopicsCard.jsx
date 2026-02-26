function TopicsCard({ slug, description, img_url }) {
  return (
    <div className="topics-card">
      <h2>{slug}</h2>
      <h3>{description}</h3>
      <img src={img_url}></img>
    </div>
  );
}

export default TopicsCard;
