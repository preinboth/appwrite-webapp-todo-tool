/* eslint-disable @typescript-eslint/no-unused-vars */

const DATABASES = {
  todoapp: import.meta.env.VITE_APPWRITE_DATABASE_ID, // Appwrite Todos
};

const FUNCTIONS = {
  ping: import.meta.env.VITE_APPWRITE_FUNCTION_ID_PING, // Appwrite Ping Function ID
};

const COLLECTIONS = {
  profile: import.meta.env.VITE_APPWRITE_COLLECTION_ID_PROFILE, // Appwrite Profile Collection ID
  projects: import.meta.env.VITE_APPWRITE_COLLECTION_ID_PROJECTS, // Appwrite Projects Collection ID
  tasks: import.meta.env.VITE_APPWRITE_COLLECTION_ID_TASKS, // Appwrite Tasks Collection ID
};

export const appwriteConfig = {
  url: import.meta.env.VITE_APPWRITE_ENDPOINT, // Appwrite Endpoint
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID, // Appwrite Project ID
  databases: DATABASES, // Databases IDs
  functions: FUNCTIONS, // Functions IDs
  collections: COLLECTIONS, // Collections IDs
};
