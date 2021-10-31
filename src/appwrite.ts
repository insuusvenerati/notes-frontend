// @ts-ignore
import { Appwrite } from "appwrite";

type Message = {
  message: String;
};

const api = {
  provider: () => {
    const appwrite = new Appwrite();

    appwrite
      .setEndpoint("http://192.168.1.233:8081/v1") // Your Appwrite Endpoint
      .setProject("617dbb2619b26"); // Your project ID
    return appwrite;
  },

  getAccount: () => {
    return api.provider().account.get();
  },

  createSession: (email: string, password: string) => {
    return api.provider().account.createSession(email, password);
  },

  createDocument: (
    collectionId: string,
    data: Message,
    read?: Array<String>,
    write?: Array<String>,
  ) => {
    return api
      .provider()
      .database.createDocument(collectionId, data, read, write);
  },

  listDocuments: (collectionId: string) => {
    return api.provider().database.listDocuments(collectionId);
  },
};

export default api;
