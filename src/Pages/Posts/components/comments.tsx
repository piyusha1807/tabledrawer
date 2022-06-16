import React from "react";
import { Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import DataGridTable, { GridColDef } from "../../../components/Table";

const Comments = (props: any) => {
  const { cancelButton } = props;

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
    <>
      <Button variant="contained" onClick={handleCancelButton}>
        Cancel
      </Button>
      <Typography variant="body1">Comments- Data</Typography>
      <DataGridTable
        columns={getFormattedHeaders()}
        rows={data || []}
        pageSize={10}
      />
    </>
  );
};

export default Comments;
