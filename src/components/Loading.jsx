import { CircularProgress } from "@mui/material";
import React from "react";

export const Loading = () => {
  return (
    <div style={{ position: "fixed", top: "50%", left: "50%" }}>
      <CircularProgress color="inherit" />
    </div>
  );
};
