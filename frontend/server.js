import express, { json } from 'express';
import cors from 'cors';
const app = express();

app.use(cors());
app.use(json());

// Simulate users (for demo)
const users = [
  { email: "student@example.com", password: "student123", type: "student" },
  { email: "admin@example.com", password: "admin123", type: "admin" },
];

// Health check
app.get('/', (req, res) => {
  res.send('Career Guide Backend Running');
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password, type } = req.body;
  const user = users.find(
    u => u.email === email && u.password === password && u.type === type
  );
  if (user) {
    return res.json({ success: true, message: "Login successful", user: { email: user.email, type: user.type } });
  } else {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Listen
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
