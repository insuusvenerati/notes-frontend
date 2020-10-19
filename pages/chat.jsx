import {
  Button,
  ButtonGroup,
  Container,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import SendIcon from "@material-ui/icons/Send";
import { firebase } from "../src/firebase";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

const useStyles = makeStyles(() => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
  },
  sendMessageInput: {
    flex: 1,
    marginLeft: 10,
  },
  sendMessageButton: {
    padding: 10,
  },
  messageBox: {
    marginTop: 10,
    minHeight: 400,
    padding: 10,
  },
}));

const auth = firebase.auth();
const firestore = firebase.firestore();

const Chat = () => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limitToLast(25);
  const [messages] = useCollectionData(query, { idField: "id" });
  const [user] = useAuthState(auth);
  const classes = useStyles();
  const [input, setInput] = useState("");

  function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  function SignOut() {
    return user && <Button onClick={() => auth.signOut()}>Sign Out</Button>;
  }

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: input,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setInput("");
  };

  return (
    <>
      <Container maxWidth="md">
        <ButtonGroup style={{ marginBottom: 6 }} variant="contained">
          <Button disabled={!!user} onClick={signInWithGoogle}>
            {user ? `Welcome ${user.displayName}` : `Sign In with Google`}
          </Button>
          <SignOut />
        </ButtonGroup>
        <Paper onSubmit={sendMessage} className={classes.root} component="form">
          <IconButton onClick={() => setInput("")}>
            <ClearIcon />
          </IconButton>
          <InputBase
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={classes.sendMessageInput}
            placeholder="Send a message"
          ></InputBase>
          <IconButton disabled={!input} type="submit" className={classes.sendMessageButton}>
            <SendIcon />
          </IconButton>
        </Paper>

        <Paper className={classes.messageBox}>
          {messages &&
            user &&
            messages.map((msg) => (
              <Typography
                style={{ display: "flex", alignItems: "center" }}
                key={msg.id}
                variant="subtitle2"
              >
                <img
                  style={{ width: 50, borderRadius: "50%", marginRight: 3 }}
                  src={msg.photoURL}
                  alt="user"
                />
                {user.displayName}: {msg.text}
              </Typography>
            ))}
        </Paper>
      </Container>
    </>
  );
};

export default Chat;
