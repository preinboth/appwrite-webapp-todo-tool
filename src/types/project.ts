export type IProject = {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  ownerId: string;
};

export type IProjectList = {
  projects: IProject[];
  total: number;
};

export type IProjectUpdate = {
  name?: string;
  description?: string;
};
export type IProjectCreate = {
  name: string;
  description?: string;
};
