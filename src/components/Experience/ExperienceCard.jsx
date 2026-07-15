function ExperienceCard({ role, company, duration, type, responsibilities }) {
  return (
    <div className="experience-card">
      <h3>{role}</h3>
      <p>
        <strong>{company}</strong> - {duration} ({type})
      </p>
      <ul>
        {responsibilities.map((resp, index) => (
          <li key={index}>{resp}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
