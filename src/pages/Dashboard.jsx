import "./Dashboard.css";

export default function Dashboard({ setPage }) {

  return (
    <div className="dashboard-content-advanced">

      {/* Stats */}
      <div className="stats-row">

        <div className="stat-card">
          <div>Completed Sessions</div>
          <div className="stat-value">1 ✔️</div>
        </div>

        <div className="stat-card">
          <div>Upcoming Sessions</div>
          <div className="stat-value">1 🕒</div>
        </div>

        <div className="stat-card">
          <div>Careers Explored</div>
          <div className="stat-value">8+ 🧭</div>
        </div>

        <div className="stat-card">
          <div>Progress</div>
          <div className="stat-value">65% 📈</div>
        </div>

      </div>

      {/* Quick Actions */}
      <div className="actions-activity-row">

        <div className="quick-actions">
          <h3>Quick Actions</h3>
          <p>Get started with these key features</p>

          <div className="actions-grid">

            <div className="action-card blue"
              onClick={() => setPage("Explore Careers")}>
              <div className="action-title">Explore Careers</div>
              <div className="action-desc">
                Discover career paths that match your interests
              </div>
            </div>

            <div className="action-card purple"
              onClick={() => setPage("Quiz")}>
              <div className="action-title">Take Assessment</div>
              <div className="action-desc">
                Complete a quiz to identify your strengths
              </div>
            </div>

            <div className="action-card green"
              onClick={() => setPage("Book Session")}>
              <div className="action-title">Book Counseling</div>
              <div className="action-desc">
                Schedule a session with a career counselor
              </div>
            </div>

            <div className="action-card orange"
              onClick={() => setPage("Resources")}>
              <div className="action-title">Browse Resources</div>
              <div className="action-desc">
                Access guides, articles, and videos
              </div>
            </div>

          </div>
        </div>

        {/* Activity */}
        <div className="recent-activity">
          <h3>Recent Activity</h3>

          <ul>
            <li>Completed Career Assessment — 2 days ago</li>
            <li>Explored Software Developer Career — 3 days ago</li>
            <li>Read Resume Guide — 5 days ago</li>
          </ul>
        </div>

      </div>

    </div>
  );
}