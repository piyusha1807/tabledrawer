import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import Posts from "./Pages/Posts";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Posts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
