// backend/server.js
import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// In-memory users
let users = [
  { id: 1, name: "Vinay", email: "vinay@example.com", department: "Engineering" },
];

// Get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Add a user
app.post("/api/users", (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  console.log("Added:", newUser);
  res.status(201).json(newUser);
});

// Update user
app.put("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.map((u) => (u.id === id ? { ...u, ...req.body } : u));
  res.json({ message: "User updated" });
});

// Delete user
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  users = users.filter((u) => u.id !== id);
  console.log("Deleted user with id:", id);
  res.json({ message: "User deleted" });
});

app.listen(8080, () => console.log("✅ Backend running at http://localhost:8080"));
