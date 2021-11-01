import { useEffect, useState } from "react";
import api from "../src/appwrite";
import {
  Button,
  ButtonGroup,
  Container,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from "@material-ui/core";
import { sendMessage } from "next/dist/client/dev/error-overlay/websocket";
import { makeStyles } from "@material-ui/styles";

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

const Chat = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api
      .createSession("norwood.sean@gmail.com", "omgwtf")
      .then((data) => console.log("create session success", data))
      .catch((error) => console.error("create session", error));

    api
      .getAccount()
      .then((data) => console.log("get account success", data))
      .catch((error) => console.error("get account fail", error));

    api
      .createDocument("617dbfe95a991", { message: "hello 2" })
      .then((data) => console.log("create document success", data))
      .catch((e) => console.error("create document fail", e));

    api.listDocuments("617dbfe95a991").then((data) => {
      console.log("Data", data);
      setMessages(data.documents);
    });
  }, []);
  return (
    <>
      <Container maxWidth="md">
        {/*<ButtonGroup style={{ marginBottom: 6 }} variant="contained">*/}
        {/*  <Button disabled={!!user} onClick={signInWithGoogle}>*/}
        {/*    {user ? `Welcome ${user.displayName}` : `Sign In with Google`}*/}
        {/*  </Button>*/}
        {/*</ButtonGroup>*/}
        <Paper onSubmit={sendMessage} className={classes.root} component="form">
          {/*<IconButton onClick={() => setInput("")}>*/}
          {/*  <ClearIcon />*/}
          {/*</IconButton>*/}
          {/*<InputBase*/}
          {/*  value={input}*/}
          {/*  onChange={(e) => setInput(e.target.value)}*/}
          {/*  className={classes.sendMessageInput}*/}
          {/*  placeholder="Send a message"*/}
          {/*/>*/}
          {/*<IconButton*/}
          {/*  disabled={!input}*/}
          {/*  type="submit"*/}
          {/*  className={classes.sendMessageButton}*/}
          {/*>*/}
          {/*  <SendIcon />*/}
          {/*</IconButton>*/}
        </Paper>

        <Paper className={classes.messageBox}>
          {messages &&
            messages.map((msg) => (
              <Typography
                style={{ display: "flex", alignItems: "center" }}
                key={msg.$id}
                variant="subtitle2"
              >
                {/*<img*/}
                {/*  style={{ width: 50, borderRadius: "50%", marginRight: 3 }}*/}
                {/*  src={msg.photoURL}*/}
                {/*  alt="user"*/}
                {/*/>*/}
                {msg.message}
              </Typography>
            ))}
        </Paper>
      </Container>
    </>
  );
};

export default Chat;
