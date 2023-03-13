import React from "react";
import { Grid, Select, FormControl, MenuItem, InputLabel } from "@mui/material";

const SelectInput = ({ label, grid = 2, options, handleChange }) => {
  return (
    <Grid container item xs={grid}>
      <FormControl fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select label={label} onChange={handleChange} size="small">
          {options.length > 0 &&
            options.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Grid>
  );
};

export default SelectInput;
