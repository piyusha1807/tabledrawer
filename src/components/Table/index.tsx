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
  rowsPerPageOptions = [10, 20, 30],
  checkboxSelection = false,
  LoadingOverlay,
  apiRef,
  loading,
  autoHeight,
  ...props
}: any) {
  return (
    <Box width="100%">
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={checkboxSelection}
        apiRef={apiRef}
        loading={loading}
        showCellRightBorder={false}
        showColumnRightBorder={false}
        className="data-table"
        aria-label="data table"
        autoHeight
        disableSelectionOnClick
        disableColumnMenu
        {...props}
        components={{
          LoadingOverlay,
          NoRowsOverlay: CustomNoRowsOverlay,
        }}
        componentsProps={{
          pagination: {
            pageSize,
            rowsPerPageOptions,
          },
          toolbar: { apiRef, columns },
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
