import React, { useState } from "react";
import DataGrid from "../../../components/DataGrid";
import Form from "../../../components/Form";
import { gridData, initialDataSource, formData } from "./constants";
import { Box, Grid, Button } from "@mui/material";
import "./styles.scss";

const ContractList = () => {
  const [isForm, setIsForm] = useState(false);
  const [dataSource, setDataSource] = useState(initialDataSource);

  const onSubmit = (values) => {
    let data = [...dataSource];
    data.push(values);
    setDataSource(data);
  };
  return (
    <Box sx={{ height: "100%" }}>
      <Grid item xs={12} className="formContaniner">
        <Grid className="addAndCancelButtons">
          <Button
            variant="contained"
            onClick={() => setIsForm(true)}
            size="small"
          >
            Yeni Ekle
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            onClick={() => setIsForm(false)}
            sx={{ marginLeft: "10px" }}
          >
            Vazgeç
          </Button>
        </Grid>
        {isForm && (
          <Form formData={formData} submitText="Kaydet" onSave={onSubmit} />
        )}
      </Grid>
      <Grid sx={{ height: "60%" }}>
        <DataGrid gridData={gridData} dataSource={dataSource} />
      </Grid>
    </Box>
  );
};

export default ContractList;
