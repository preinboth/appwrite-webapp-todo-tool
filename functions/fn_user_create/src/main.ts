import * as sdk from 'node-appwrite';

import { Models } from 'appwrite';

interface RequestBody extends Models.User<Models.Preferences> {
  targets: Models.Target[];
  accessedAt: string;
}



export default async ({ req, res, log, error }: any) => {
  const projectId = process.env.VITE_APPWRITE_PROJECT_ID; // Appwrite Project ID
  const endpoint = process.env.VITE_APPWRITE_ENDPOINT; // Appwrite Endpoint

  const client = new sdk.Client()
    .setEndpoint(endpoint) // Set Appwrite Endpoint
    .setProject(projectId) // Set Appwrite Project ID;
    .setKey(req.headers['x-appwrite-key'] ?? '');

  return res.json({
    message: 'Hello from Node.js on Appwrite!',
  });
};
