import * as yup from "yup";
export const gridData = [
  { field: "id", headerName: "Id", flex: 1 },
  { field: "contract", headerName: "Kontrat", flex: 1 },
  { field: "offer", headerName: "Teklif", flex: 1 },
  { field: "data", headerName: "Data", flex: 1 },
];

export const initialDataSource = [
  {
    id: 1,
    contract: "2019",
    offer: 78152,
    data: "Alış",
  },
  {
    id: 2,
    contract: "2019",
    offer: 78125,
    data: "Satış",
  },
];

export const formData = [
  {
    type: "text",
    name: "id",
    label: "No giriniz",
    validation: yup.string().required("Required"),
  },
  {
    type: "text",
    name: "contract",
    label: "Kontrat giriniz.",
    validation: yup.string().required("Required"),
  },
  {
    type: "text",
    name: "offer",
    label: "Teklif giriniz.",
    validation: yup.string().required("Required"),
  },
  {
    type: "text",
    name: "data",
    label: "Data giriniz.",
    validation: yup.string().required("Required"),
  },
];
