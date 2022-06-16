import React from "react";
import { Box, AppBar, Toolbar } from "@mui/material";

const Navbar = () => {
  const username = sessionStorage.getItem("username");
  return (
    <AppBar>
      <Toolbar>
        <Box>
          <p>Hello {username}</p>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
