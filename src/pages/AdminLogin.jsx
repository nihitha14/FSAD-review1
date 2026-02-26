import { useState } from "react";
import Register from "../components/Register";
import "../styles/AdminLogin.css";

export default function AdminLogin({ onLogin }) {

  const [role, setRole] = useState("student");
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="admin-container">

      <h1 className="title">Welcome to CareerGuide</h1>
      <p className="subtitle">
        Sign in to access your personalized career guidance
      </p>

      {/* ROLE SWITCH */}
      <div className="role-switch">
        <button
          className={role === "student" ? "active" : ""}
          onClick={() => setRole("student")}
        >
          Student
        </button>

        <button
          className={role === "admin" ? "active" : ""}
          onClick={() => setRole("admin")}
        >
          Admin
        </button>
      </div>

      {/* ================= STUDENT LOGIN ================= */}
      {role === "student" && (
        <div className="login-card">

          <h2>Student Login</h2>
          <p>Access your career guidance dashboard</p>

          <input placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button className="student-btn" onClick={onLogin}>
            Sign In as Student
          </button>

          <p className="register-text">
            Don't have an account?
            <span onClick={() => setShowRegister(true)}>
              Register
            </span>
          </p>
        </div>
      )}

      {/* ================= ADMIN LOGIN ================= */}
      {role === "admin" && (
        <div className="login-card">

          <h2>Admin Login</h2>
          <p>Access the administrative dashboard</p>

          <input placeholder="admin@example.com" />
          <input type="password" placeholder="Enter your password" />

          <button className="admin-btn" onClick={onLogin}>
            Sign In as Admin
          </button>

          <p className="demo-text">
            Demo: Use any email and password
          </p>

        </div>
      )}

      {/* REGISTER POPUP (ONLY STUDENT) */}
      {showRegister && (
        <Register onClose={() => setShowRegister(false)} />
      )}

    </div>
  );
}