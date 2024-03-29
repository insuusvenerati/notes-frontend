import {
  Button,
  CircularProgress,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Alert } from '@mui/material';
import { NotesContext } from "context/notes";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useCookies } from "react-cookie";

const AddNote = () => {
  const [cookies] = useCookies(["id"]);
  const {
    addNoteForm,
    setNoteForm,
    handleSubmit,
    addNoteError,
    addNoteLoading,
  } = useContext(NotesContext);
  const router = useRouter();

  if (!cookies.id) return <Alert severity="error">Please sign in</Alert>;

  return (
    <Grid container>
      <Grid item xs={12}>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
            router.push("/notes");
          }}
          autoComplete="off"
        >
          <FormGroup>
            <TextField
              onChange={(e) =>
                setNoteForm({ ...addNoteForm, title: e.target.value })
              }
              value={addNoteForm.title}
              label="Title"
              style={{ marginBottom: 5 }}
              required
            />
            <TextField
              onChange={(e) =>
                setNoteForm({ ...addNoteForm, message: e.target.value })
              }
              value={addNoteForm.message}
              rows={4}
              multiline
              label="Message"
              required
            />

            {addNoteError && <Typography>{addNoteError.message}</Typography>}
          </FormGroup>

          <Button
            disabled={addNoteLoading}
            type="submit"
            style={{ marginTop: 10 }}
            variant="contained"
            color="primary"
          >
            Submit
            {addNoteLoading && (
              <CircularProgress
                style={{ marginLeft: 10 }}
                size={20}
                color="inherit"
              />
            )}
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default AddNote;
