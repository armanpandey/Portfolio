import achievements from "../../data/achievements";
import "./achievements.css";
import AchievementCard from "./AchievementCard";

function Achievements() {
  return (
    <section id="achievements">
      <div className="achievements-heading">
        <h2>
          My <span>Achievements</span>
        </h2>
      </div>
      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            title={achievement.title}
            event={achievement.event}
            description={achievement.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Achievements;


