import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function BasicButton({ text, onClick }) {
  return (
    <Box sx={{ paddingTop: "12px" }}>
      <Button variant="contained" onClick={onClick}>
        {text}
      </Button>
    </Box>
  );
}
