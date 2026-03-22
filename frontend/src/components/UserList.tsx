import React from "react";
import { User } from "../types/user";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface Props {
  users?: User[];
  isLoading: boolean;
  isError: boolean;
}

const UserList: React.FC<Props> = ({ users, isLoading, isError }) => {
  if (isLoading)
    return <p style={{ textAlign: "center" }}>Loading users...</p>;

  if (isError)
    return (
      <p style={{ textAlign: "center", color: "red" }}>
        Failed to load users
      </p>
    );

  return (
    <Paper sx={{ width: "80%", margin: "20px auto" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default React.memo(UserList);