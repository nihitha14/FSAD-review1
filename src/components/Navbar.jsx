export default function Navbar({ user, onLogout, setPage, page }) {

  const active = (name) =>
    page === name ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">

      <div className="navbar-left">

        <span
          className="logo"
          onClick={() => setPage("Dashboard")}
        >
          🎓 CareerGuide
        </span>

        <span className={active("Dashboard")}
          onClick={() => setPage("Dashboard")}>
          Dashboard
        </span>

        <span className={active("Explore Careers")}
          onClick={() => setPage("Explore Careers")}>
          Explore Careers
        </span>

        <span className={active("Quiz")}
          onClick={() => setPage("Quiz")}>
          Quiz
        </span>

        <span className={active("Book Session")}
          onClick={() => setPage("Book Session")}>
          Book Session
        </span>

        <span className={active("Resources")}
          onClick={() => setPage("Resources")}>
          Resources
        </span>

      </div>

      <div className="navbar-right">
        <span className="avatar"></span>
        <span>{user?.name || "John Doe"}</span>

        <button className="logout-btn" onClick={onLogout}>
          Logout
        </button>
      </div>

    </nav>
  );
}