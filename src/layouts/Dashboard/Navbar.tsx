import { Box, Stack, AppBar, Toolbar } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Box component={RouterLink} to="/">
          <p>Piyush</p>
        </Box>
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          <RouterLink to="/posts">Posts</RouterLink>
          <RouterLink to="/comments">Comments</RouterLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
