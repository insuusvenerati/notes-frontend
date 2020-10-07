import { Alert } from "@material-ui/lab";
import React from "react";

type ErrorProps = {
  error: Error;
};

export const Error = ({ error }: ErrorProps): JSX.Element => {
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
