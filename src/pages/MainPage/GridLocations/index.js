import React from "react";
import { useSelector } from "react-redux";
import { Box, Card, Typography } from "@mui/material";
import "./styles.scss";

const GridLocations = () => {
  const { gridSizes } = useSelector((state) => state.splitGrid);
  const windowValues = [
    {
      label: "Yatay Pencere Değerleri",
      value: gridSizes.horizontalWindow,
    },
    {
      label: "Üst Dikey Pencere Değerleri:",
      value: gridSizes.topVerticalWindow,
    },
    {
      label: "Alt Dikey Pencere Değeleri:",
      value: gridSizes.bottomVerticalWindow,
    },
  ];
  return (
    <Box className="boxContainer">
      <Card className="cardContainer">
        <Typography className="title" gutterBottom>
          Ayarlar
        </Typography>
        {windowValues.map((item) => {
          return (
            <Typography className="text" gutterBottom key={item.label}>
              <strong>{`${item.label}: `}</strong>
              {item.value.length > 0 &&
                `%${item.value[0] || ""}  %${item.value[1] || ""} `}
            </Typography>
          );
        })}
      </Card>
    </Box>
  );
};

export default GridLocations;
