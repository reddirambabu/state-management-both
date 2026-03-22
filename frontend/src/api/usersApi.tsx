import axios from "axios";

export interface User {
  id: number;
  name: string;
  email: string;
}

const API_BASE = "http://localhost:5000/api";

export const fetchUsers = async (): Promise<User[]> => {
  const { data } = await axios.get(`${API_BASE}/users`);
  return data;
};

export const addUser = async (user: Omit<User, "id">): Promise<User> => {
  const { data } = await axios.post(`${API_BASE}/users`, user);
  return data;
};