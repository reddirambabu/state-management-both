import React, { useState } from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";
import AddUserModal from "./components/AddUserModal";
import { useUsers } from "./hooks/useUsers";
import { useAddUser } from "./hooks/useAddUser";
import { Button, Container } from "@mui/material";

const App = () => {
  const { data, isLoading, isError } = useUsers();
  const mutation = useAddUser();
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header />

      {/* Button to open modal */}
      <Container sx={{ textAlign: "center", marginTop: 3 }}>
        <Button variant="contained" onClick={() => setModalOpen(true)}>
          Add New User
        </Button>
      </Container>

      {/*  FIXED MODAL */}
      <AddUserModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onAddUser={(user) => mutation.mutate(user)}
        loading={mutation.isPending}
      />

      <UserList users={data} isLoading={isLoading} isError={isError} />
    </>
  );
};

export default App;