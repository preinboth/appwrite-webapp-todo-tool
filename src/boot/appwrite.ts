import { Account, Client, Databases, Functions } from 'appwrite';

// eslint-disable-next-line max-len
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID; // Appwrite Project ID
// eslint-disable-next-line max-len
const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT; // Appwrite Endpoint
// eslint-disable-next-line max-len
const key = import.meta.env.VITE_APPWRITE_API_KEY; // Appwrite API Key (optional, if needed for server-side operations)

// Initialize the Appwrite client
const client = new Client();

client.setEndpoint(endpoint).setProject(projectId).setDevKey(key); // Set the endpoint, project ID, and API key

export const account = new Account(client);
export const databases = new Databases(client);
export const functions = new Functions(client);
export { ID } from 'appwrite';
