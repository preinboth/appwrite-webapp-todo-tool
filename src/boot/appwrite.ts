import { Account, Client, Databases, Functions, Teams } from 'appwrite';

// eslint-disable-next-line max-len
const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID; // Appwrite Project ID
// eslint-disable-next-line max-len
const endpoint = import.meta.env.VITE_APPWRITE_ENDPOINT; // Appwrite Endpoint

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const key = import.meta.env.VITE_APPWRITE_API_KEY; // Appwrite API Key (optional, if needed for server-side operations)

// Initialize the Appwrite client
const client = new Client();

client.setEndpoint(endpoint).setProject(projectId); // Set the endpoint, project ID, and API key

export const account = new Account(client);
export const databases = new Databases(client);
export const functions = new Functions(client);
export const teams = new Teams(client);
export { client };
export { ID, OAuthProvider } from 'appwrite';

// account.createOAuth2Session(OAuthProvider.Google);

// const teamsUsers = teams.get('6873fe3e00362805fb89');
// console.log(teamsUsers);
