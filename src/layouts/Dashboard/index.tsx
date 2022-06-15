import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Navbar from "./Navbar";

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
  return (
    <RootStyle>
      <Navbar />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}

export default Dashboard;
