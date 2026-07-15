function LeadershipCard({ role, organization, description }) {
  return (
    <div className="leadership-card">
      <h3>{role}</h3>
      <p>
        <strong>{organization}</strong> - {description}
      </p>
    </div>
  );
}

export default LeadershipCard;
