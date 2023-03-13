import React from "react";
import { Grid, TextField } from "@mui/material";

const TextInput = ({ formik, name, label, grid }) => {
  const handleChange = (event) => {
    formik.handleChange(event);
  };
  return (
    <Grid item xs={grid}>
      <TextField
        fullWidth
        name={name}
        value={formik.values[name]}
        label={label}
        onChange={handleChange}
        size="small"
        error={formik.touched[name] && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && formik.errors[name]}
      />
    </Grid>
  );
};

export default TextInput;
