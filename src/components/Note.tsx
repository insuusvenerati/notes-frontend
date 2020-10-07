import { Card, CardContent, CardHeader } from "@material-ui/core";
import React from "react";
import { Notes_notes } from "../queries/__generated__/Notes";

type NoteProps = {
  note: Notes_notes | null;
};

const Note = ({ note }: NoteProps): JSX.Element => {
  return (
    <Card>
      <CardHeader title={note?.title} subheader={note?.user?.username} />
      <CardContent>
        <h1>{note?.message}</h1>
      </CardContent>
    </Card>
  );
};

export default Note;
