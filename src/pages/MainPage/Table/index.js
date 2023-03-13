import React, { useState } from "react";
import { Box } from "@mui/material";
import DataGrid from "../../../components/DataGrid";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { gridData, initialDataSource, filterOptions } from "./constants";
import SelectInput from "../../../components/Form/SelectInput";

const Table = () => {
  const [dataSource, setDataSource] = useState(initialDataSource);

  const handleChange = (event) => {
    setDataSource(
      initialDataSource.filter((item) => item.contract == event.target.value)
    );
  };

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <SelectInput
          label="Kontrat Seçiniz"
          options={filterOptions}
          handleChange={handleChange}
        />
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  };
  return (
    <Box>
      <DataGrid
        gridData={gridData}
        dataSource={dataSource}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </Box>
  );
};

export default Table;
