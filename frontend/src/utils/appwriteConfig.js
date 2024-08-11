import { Client } from "appwrite";

export const API_ENDPOINT = "https://cloud.appwrite.io/v1";
export const PROJECT_ID = "66b76b16003ba2d64eae";

const client = new Client().setEndpoint(API_ENDPOINT).setProject(PROJECT_ID);
export default client;
