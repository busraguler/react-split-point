import React from "react";
import { Grid, Button } from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import TextInput from "./TextInput";

const Form = ({ formData, onSave, submitText }) => {
  const formik = useFormik({
    initialValues: formData.reduce((a, item) => {
      let form = { ...a, [item.name]: "" };
      return form;
    }, {}),
    validationSchema: yup.object(
      formData.reduce((a, item) => {
        let validation = { ...a, [item.name]: item.validation };
        return validation;
      }, {})
    ),
    onSubmit: (values) => {
      const formValues = { ...values };
      onSave(formValues);
    },
  });

  const inputHandler = ({ name, label, grid = 2 }) => {
    return (
      <TextInput
        key={name}
        formik={formik}
        name={name}
        label={label}
        grid={grid}
      />
    );
  };

  const submitButton = () => {
    return (
      <Button
        fullWidth
        type="submit"
        variant="contained"
        color="success"
        sx={{ fontSize: "11px" }}
      >
        {submitText}
      </Button>
    );
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container columnSpacing={2}>
        {formData.map((item) => inputHandler(item))}
        <Grid item xs={1}>
          {submitButton()}
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
