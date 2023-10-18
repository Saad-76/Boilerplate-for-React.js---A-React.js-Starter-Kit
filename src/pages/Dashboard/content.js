import { Grid, Typography } from "@mui/material";
import React from "react";
import Slider from "./Slider";
import ContentCard from "./contentCard";

const Content = () => {
  const contentArr = [
    {
      title: "Ahmed",
    },
    {
      title: "Saad",
    },
    {
      title: "Umer",
    },
    {
      title: "Ahmed",
    },
    {
      title: "Saad",
    },
    {
      title: "Umer",
    },
    {
      title: "Ahmed",
    },
    {
      title: "Saad",
    },
    {
      title: "Umer",
    },
  ];

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "20px 0px 0px 10px",
        minHeight: "100vh",
      }}
    >
      <Slider />
      {contentArr?.map((item) => {
        return <ContentCard sx={{ width: "100%" }} title={item.title} />;
      })}
    </Grid>
  );
};
export default Content;
