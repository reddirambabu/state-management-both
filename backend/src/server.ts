import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

interface User {
  id: number;
  name: string;
  email: string;
}

let users: User[] = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
  { id: 3, name: "Charlie", email: "charlie@example.com" },
];

// GET all users
app.get("/api/users", (_req: Request, res: Response) => {
  setTimeout(() => res.json(users), 300);
});

// POST add new user
app.post("/api/users", (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Name & email required" });

  const newUser: User = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));