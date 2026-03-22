import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../api/usersApi";
import { User } from "../types/user";

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addUser,
    onSuccess: (newUser: User) => {
      queryClient.setQueryData<User[]>(["users"], (old = []) => [
        ...old,
        newUser,
      ]);
    },
  });
};