import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./layouts/Dashboard";
import Comments from "./Pages/Comments";
import Posts from "./Pages/Posts";

export const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route index element={<Posts />} />
            <Route path="posts" element={<Posts />}>
              <Route path=":page" element={<Posts />} />
            </Route>
            <Route path="comments" element={<Comments />}>
              <Route path=":page" element={<Comments />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
