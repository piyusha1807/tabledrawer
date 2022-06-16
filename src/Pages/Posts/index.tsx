import { Box, Button, Drawer, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataGridTable, { GridColDef } from "../../components/Table";
import { fetchComments } from "../../redux/actions/commentsActions";
import { fetchPosts } from "../../redux/actions/postsActions";
import { DispatchType } from "../../redux/store";
import Comments from "./components/comments";

const Posts = () => {
  const dispatch: DispatchType = useDispatch();

  const { data } = useSelector((state: any) => state.postsState);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  function getFormattedHeaders(): GridColDef[] {
    const headers = [
      {
        columnName: "userid",
        columnKey: "userId",
      },
      {
        columnName: "id",
        columnKey: "id",
      },
      {
        columnName: "title",
        columnKey: "title",
      },
      {
        columnName: "body",
        columnKey: "body",
      },
    ];
    let headings: GridColDef[] = [];
    headings = headers.map((item: any) => {
      const header: any = {};
      header.headerName = item.columnName;
      header.field = item.columnKey;
      header.flex = 0.25;
      header.sortable = false;
      return header;
    });

    headings.push({
      headerName: "comments",
      field: "comments",
      flex: 0.25,
      sortable: false,
      renderCell: (rowData: any) => (
        <span title={"Click to view comments"}>
          <Button onClick={() => handleView(rowData)}>View</Button>
        </span>
      ),
    });

    return headings;
  }

  const handleView = ({ row }: any) => {
    dispatch(fetchComments(row.id));
    setOpenDrawer(true);
  };

  const cancelButton = () => {
    setOpenDrawer(false);
  };

  return (
    <div>
      <Typography variant="body1">Posts- Data</Typography>
      <DataGridTable
        columns={getFormattedHeaders()}
        rows={data || []}
        pageSize={10}
      />
      <Drawer anchor="right" open={openDrawer}>
        <Box width="37.56rem">
          <Comments cancelButton={cancelButton} />
        </Box>
      </Drawer>
    </div>
  );
};

export default Posts;
