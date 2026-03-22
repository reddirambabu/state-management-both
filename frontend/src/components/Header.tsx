import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        React TS + MUI: Client vs Server State Demo
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;