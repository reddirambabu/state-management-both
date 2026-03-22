import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/usersApi";
import { User } from "../types/user";

export const useUsers = () =>
  useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });