import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchUsers, addUser, User } from "./api/usersApi";
import Header from "./components/Header";
import UserList from "./components/UserList";
import AddUserModal from "./components/AddUserModal";
import { Button, Container } from "@mui/material";

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const queryClient = useQueryClient();

  // useQuery with object syntax and typed generics for v5
  const {
    data: users,
    isLoading,
    isError
  } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers
  });

  const mutation = useMutation<User, Error, Omit<User, "id">>({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      setModalOpen(false);
    }
  });

  const handleAddUser = (user: Omit<User, "id">) => {
    mutation.mutate(user);
  };

  return (
    <div>
      <Header />
      <Container sx={{ textAlign: "center", marginTop: 3 }}>
        <Button variant="contained" onClick={() => setModalOpen(true)}>
          Add New User
        </Button>
      </Container>
      <AddUserModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddUser={handleAddUser}
        loading={mutation.status === 'pending'}
      />
      <UserList
        users={users}
        isLoading={isLoading}
        isError={!!isError}
      />
    </div>
  );
};

export default App;