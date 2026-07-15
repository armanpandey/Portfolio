import leadership from "../../data/leadership";
import "./Leadership.css";
import LeadershipCard from "./LeadershipCard";

function Leadership() {
  return (
    <section id="leadership">
      <div className="leadership-heading">
        <h2>
          My <span>Leadership </span>
        </h2>
      </div>
      <div className="leadership-grid">
        {leadership.map((lead) => (
          <LeadershipCard
            key={lead.id}
            role={lead.role}
            organization={lead.organization}
            description={lead.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Leadership;
