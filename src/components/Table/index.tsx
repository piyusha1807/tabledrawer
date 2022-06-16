import React from "react";
import {
  DataGrid,
  GridColDef as GridColDefType,
  GridOverlay,
} from "@mui/x-data-grid";
import { Box } from "@mui/material";
import "./styles/index.scss";

function DataGridTable({
  rows = [],
  columns = [],
  pageSize = 10,
  rowsPerPageOptions = [10],
  LoadingOverlay,
  loading,
  autoHeight,
  ...props
}: any) {
  return (
    <Box width="100%">
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        pageSize={pageSize}
        rowsPerPageOptions={rowsPerPageOptions}
        className="data-table"
        autoHeight
        disableSelectionOnClick
        disableColumnMenu
        {...props}
        components={{
          LoadingOverlay,
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
      />
    </Box>
  );
}

function CustomNoRowsOverlay() {
  return (
    <GridOverlay>
      <div>No records to display</div>
    </GridOverlay>
  );
}

export type GridColDef = GridColDefType;
export default DataGridTable;
