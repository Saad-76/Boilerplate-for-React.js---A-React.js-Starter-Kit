import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";

import Auth from "../Assets/auth.jpg";
import "./style.css";

const AuthContainer = ({ title, children }) => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={7}>
        <img src={Auth} alt="alt" className="auth-image" />
      </Grid>
      <Grid
        item
        xs={5}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          sx={{
            border: "1px solid black",
            borderRadius: "20px",
            margin: "0px 20px",
            padding: "12px",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography variant="h6">{title}</Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px 0px",
            }}
          >
            {children}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};
export default AuthContainer;
