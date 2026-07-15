function AchievementCard({ title, event, description }) {
  return (
    <div className="achievements-card">
      <h3>{title}</h3>
      <p>
        <strong>{event}</strong> - {description}
      </p>
    </div>
  );
}

export default AchievementCard;
