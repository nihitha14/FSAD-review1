import { useState } from "react";
import Register from "../components/Register";
import "../styles/Login.css";

export default function Login({ onLogin }) {

  const [showRegister, setShowRegister] = useState(false);
  const [mode, setMode] = useState("student");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  /* ---------- LOGIN VALIDATION ---------- */
  const handleLogin = () => {
    let valid = true;

    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Enter Email");
      valid = false;
    }

    if (!password.trim()) {
      setPasswordError("Enter Password");
      valid = false;
    }

    if (!valid) return;

    // Example Admin Credentials
    if (mode === "admin") {
      if (email === "admin@gmail.com" && password === "admin123") {
        alert("Admin Login Successful ✅");
        onLogin();
      } else {
        alert("Invalid Admin Credentials ❌");
      }
    } else {
      onLogin();
    }
  };

  return (
    <div className="login-container">

      {/* LEFT IMAGE */}
      <div className="login-left">
        <div className="left-overlay">
          <h1>🎓 CareerGuide</h1>
          <p>
            Discover your perfect career path,
            connect with mentors and build your future.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">

        <h1>Welcome to CareerGuide</h1>
        <p className="subtitle">
          Sign in to access your personalized career guidance
        </p>

        {/* TOGGLE */}
        <div className="login-toggle">
          <button
            className={mode === "student" ? "active" : ""}
            onClick={() => setMode("student")}
          >
            Student
          </button>

          <button
            className={mode === "admin" ? "active" : ""}
            onClick={() => setMode("admin")}
          >
            Admin
          </button>
        </div>

        <div className="login-card">

          <h2>
            {mode === "student"
              ? "Student Login"
              : "Admin Login"}
          </h2>

          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error">{emailError}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && (
            <p className="error">{passwordError}</p>
          )}

          <button className="login-btn" onClick={handleLogin}>
            {mode === "student"
              ? "Sign In as Student"
              : "Sign In as Admin"}
          </button>

          {/* ONLY STUDENT HAS REGISTER */}
          {mode === "student" && (
            <p className="register-text">
              Don't have an account?
              <span
                className="register-link"
                onClick={() => setShowRegister(true)}
              >
                Register
              </span>
            </p>
          )}
        </div>
      </div>

      {/* REGISTER POPUP */}
      {showRegister && (
        <Register onClose={() => setShowRegister(false)} />
      )}
    </div>
  );
}