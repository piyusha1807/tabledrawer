import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import DataGridTable, { GridColDef } from "../../../components/Table";

const Comments = (props: any) => {
  const { postsId, cancelButton } = props;

  const { data } = useSelector((state: any) => state.commentsState);

  function getFormattedHeaders(): GridColDef[] {
    const headers = [
      {
        columnName: "id",
        columnKey: "id",
      },
      {
        columnName: "name",
        columnKey: "name",
      },
      {
        columnName: "email",
        columnKey: "email",
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

    return headings;
  }

  const handleCancelButton = () => {
    cancelButton();
  };

  return (
    <Box sx={{ p: 2 }}>
      <Stack direction="row-reverse">
        <Button variant="contained" onClick={handleCancelButton}>
          Cancel
        </Button>
      </Stack>
      <Typography variant="body1">Comments of posts - {postsId}</Typography>
      <DataGridTable
        columns={getFormattedHeaders()}
        rows={data || []}
        pageSize={10}
      />
    </Box>
  );
};

export default Comments;
