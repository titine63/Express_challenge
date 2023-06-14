const express = require("express");
const app = express();
const port = 5002;

// Base de données simulée
const users = [
  { id: 1, name: "Harry" },
  { id: 2, name: "Ron" },
  { id: 3, name: "Hermione" },
];

// Route GET /api/users
app.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

// Route GET /api/users/:id
app.get("/api/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((user) => user.id === userId);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send("Not Found");
  }
});

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});
