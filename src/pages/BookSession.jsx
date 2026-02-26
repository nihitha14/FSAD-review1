import "./BookSession.css";

export default function BookSession() {
  return (
    <div className="book-wrapper">

      <div className="book-card">

        <h1>📅 Book Counseling Session</h1>
        <p className="subtitle">
          Schedule a session with a professional career counselor
        </p>

        <form className="booking-form">

          <div className="input-group">
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="input-group">
            <label>Preferred Date</label>
            <input type="date" />
          </div>

          <div className="input-group">
            <label>Preferred Time</label>
            <input type="time" />
          </div>

          <button className="book-btn">
            Book Session 🚀
          </button>

        </form>

      </div>

    </div>
  );
}