import { Request, Response } from "express";
import { users } from "../models/user.model";

export const getUsers = (_: Request, res: Response) => {
  res.json(users);
};

export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;

  const newUser = {
    id: Date.now(),
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
};