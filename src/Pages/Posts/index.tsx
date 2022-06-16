import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataGridTable from "../../components/Table";
import { fetchPosts } from "../../redux/actions/userActions";

const Posts = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state: any) => state.postsState);

  useEffect(() => {
    dispatch(fetchPosts() as any);
  }, []);

  return (
    <div>
      <Typography>Posts- Table</Typography>
      <DataGridTable />
    </div>
  );
};

export default Posts;
