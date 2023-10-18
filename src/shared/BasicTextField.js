import * as React from "react";
import TextField from "@mui/material/TextField";

export default function BasicTextField({ label, type }) {
  return (
    <TextField
      id="standard-basic"
      label={label}
      variant="standard"
      type={type}
      sx={{
        margin: "12px 0px",
        width: "100%",
      }}
    />
  );
}
