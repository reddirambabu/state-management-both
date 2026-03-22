import { api } from "./axiosInstance";
import { User } from "../types/user";

export const fetchUsers = async (): Promise<User[]> => {
  const { data } = await api.get("/users");
  return data;
};

export const addUser = async (
  user: Omit<User, "id">
): Promise<User> => {
  const { data } = await api.post("/users", user);
  return data;
};