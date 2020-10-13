import { Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";

const Note = ({ note }) => {
  const date = new Date(note?.createdAt).toLocaleDateString();
  return (
    <Card>
      <CardHeader title={note?.title} subheader={note?.user?.username} />
      <CardHeader subheader={date} />
      <CardContent>
        <h1>{note?.message}</h1>
      </CardContent>
    </Card>
  );
};

export default Note;
