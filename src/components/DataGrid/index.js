import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const Grid = ({ gridData, dataSource, slots }) => {
  return (
    <DataGrid
      columns={gridData}
      rows={dataSource}
      slots={slots}
      disableColumnMenu
      hideFooter
    />
  );
};

export default Grid;
