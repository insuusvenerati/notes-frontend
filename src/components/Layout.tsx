import { Box } from "@material-ui/core";
import React from "react";
import Navbar from "./Navbar";

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box p={3}>{children}</Box>
    </>
  );
};
