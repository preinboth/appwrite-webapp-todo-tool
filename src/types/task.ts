import { ID } from 'appwrite';

export type ITask = {
  id: ID;
  title: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string; // ISO date string
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  projectId: ID; // Reference to the project this task belongs to
};
