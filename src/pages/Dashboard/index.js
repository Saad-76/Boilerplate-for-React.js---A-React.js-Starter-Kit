import React from "react";
import Sidebar from "./sidebar";
import { Grid } from "@mui/material";
import Content from "./content";
import Profile from "./profile";

const Dashboard = () => {
  return (
    <>
      <Grid container display={"flex"} flexDirection={"row"}>
        <Grid item xs={2} sx={{ borderRight: "2px solid #50444414" }}>
          <Sidebar />
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            borderRight: "2px solid #50444414",
            minHeight: "100vh",
            // overflowY: "scroll",
          }}
        >
          <Content />
        </Grid>
        <Grid item xs={4}>
          <Profile />
        </Grid>
      </Grid>
    </>
  );
};
export default Dashboard;
