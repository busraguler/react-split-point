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
  {
    id: 3,
    contract: "2019",
    offer: 1485,
    data: "Satış",
  },
  {
    id: 4,
    contract: "2018",
    offer: 12444,
    data: "Satış",
  },
  {
    id: 5,
    contract: "2018",
    offer: 255,
    data: "Alış",
  },
];

export const filterOptions = [
  { value: 2019, label: "2019" },
  { value: 2018, label: "2018" },
];
