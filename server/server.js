const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Temporary in-memory storage
const users = [];

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

// SIGNUP
app.post("/signup", (req, res) => {
  const { email, password, role } = req.body;

  const existingUser = users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists ❌" });
  }

  const newUser = {
    email,
    password,
    role: role.toLowerCase(),
  };

  users.push(newUser);

  res.json({
    message: "Signup Success ✅",
    role: newUser.role,   // ✅ THIS WAS MISSING BEFORE
    token: "fake-jwt-token"
  });
});

// LOGIN
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("ALL USERS:", users);

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(400).json({ message: "User not found ❌" });
  }

  if (user.password !== password) {
    return res.status(400).json({ message: "Wrong password ❌" });
  }

  console.log("LOGGED USER:", user);

  res.json({
    message: "Login success ✅",
    role: user.role,   // 🔥 THIS MUST BE CORRECT
    token: "fake-jwt-token",
  });
});

app.listen(5000, () => {
  console.log("Server started on 5000 🚀");
});