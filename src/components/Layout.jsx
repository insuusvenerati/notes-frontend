import { Box } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box p={1}>{children}</Box>
    </>
  );
};
