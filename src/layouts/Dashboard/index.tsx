import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Navbar from "./Navbar";
import UserModal from "./UserModal";

const APP_BAR = 62;

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
});

const MainStyle = styled("div")({
  flexGrow: 1,
  overflow: "auto",
  minHeight: "100%",
  paddingTop: APP_BAR + 24,
});

function Dashboard() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (!sessionStorage.getItem("username")) {
      handleOpen();
    }
  }, []);

  return (
    <RootStyle>
      <Navbar />
      <UserModal open={open} handleClose={handleClose} />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}

export default Dashboard;
