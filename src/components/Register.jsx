import { useState } from "react";
import "./Register.css";

export default function Register({ onClose }) {

  /* ---------- FORM STATE ---------- */
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: ""
  });

  const [errors, setErrors] = useState({});

  /* ---------- HANDLE CHANGE ---------- */
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  /* ---------- VALIDATION ---------- */
  const validate = () => {
    let newErrors = {};

    if (!form.firstName)
      newErrors.firstName = "Enter First Name";

    if (!form.lastName)
      newErrors.lastName = "Enter Last Name";

    if (!form.gender || form.gender === "Gender")
      newErrors.gender = "Select Gender";

    if (!form.email)
      newErrors.email = "Enter Email";
    else if (!form.email.endsWith("@gmail.com"))
      newErrors.email = "Email must end with @gmail.com";

    if (!form.password)
      newErrors.password = "Enter Password";

    if (!form.confirmPassword)
      newErrors.confirmPassword = "Confirm your password";

    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!form.address)
      newErrors.address = "Enter Address";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* ---------- REGISTER ---------- */
  const handleRegister = () => {

    if (!validate()) return;

    alert("✅ Registration Successful!");

    onClose(); // close popup
  };

  return (
    <div className="register-overlay">

      <div className="register-modal">

        <h2>Create Account</h2>

        <input
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <p className="error">{errors.firstName}</p>

        <input
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <p className="error">{errors.lastName}</p>

        <select name="gender" onChange={handleChange}>
          <option>Gender</option>
          <option>Male</option>
          <option>Female</option>
        </select>
        <p className="error">{errors.gender}</p>

        <input
          name="email"
          placeholder="Email (@gmail.com)"
          onChange={handleChange}
        />
        <p className="error">{errors.email}</p>

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <p className="error">{errors.password}</p>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <p className="error">{errors.confirmPassword}</p>

        <textarea
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />
        <p className="error">{errors.address}</p>

        <button className="register-btn" onClick={handleRegister}>
          Register
        </button>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
}