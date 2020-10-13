import { Alert } from "@material-ui/lab";
import React from "react";

export const Error = ({ error }) => {
  return (
    <Alert severity="error">
      Error loading notes from the server{" "}
      <span aria-label="sad face" role="img">
        😢
      </span>{" "}
      The server reported: {error?.message}
    </Alert>
  );
};
