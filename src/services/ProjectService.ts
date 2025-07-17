import { Client, Databases, Query, ID, Models } from 'appwrite';
import type { IProject, IProjectList } from 'src/types/project';
import { databases } from 'src/boot/appwrite';
import { appwriteConfig } from '../config';

export class ProjectService {
  private client: Client;

  private databases: Databases;

  private readonly databaseId: string;

  private readonly collectionId: string;

  constructor(client: Client) {
    this.client = client;
    this.databases = databases;
    this.databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
    this.collectionId = appwriteConfig.collections.projects;
  }

  /**
   * Erstellt ein neues Projekt
   */
  async createProject(
    projectData: Omit<IProject, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<IProject> {
    try {
      const document = await this.databases.createDocument(
        this.databaseId,
        this.collectionId,
        ID.unique(),
        {
          ...projectData,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        }
      );

      return this.mapDocumentToProject(document);
    } catch (error) {
      this.handleError('createProject', error);
      throw error;
    }
  }

  /**
   * Ruft ein Projekt anhand der ID ab
   */
  async getProject(projectId: string): Promise<IProject> {
    try {
      const document = await this.databases.getDocument(
        this.databaseId,
        this.collectionId,
        projectId
      );

      return this.mapDocumentToProject(document);
    } catch (error) {
      this.handleError('getProject', error);
      throw error;
    }
  }

  /**
   * Ruft alle Projekte ab mit optionaler Paginierung
   */
  async listProjects(
    orderBy?: string[],
    limit = 25,
    offset = 0
  ): Promise<IProjectList> {
    try {
      const queries: string[] = [Query.limit(limit), Query.offset(offset)];

      if (orderBy && orderBy.length > 0) {
        queries.push(Query.orderDesc(orderBy[0]));
      }

      const response = await this.databases.listDocuments(
        this.databaseId,
        this.collectionId,
        queries
      );

      return {
        projects: response.documents.map((doc) =>
          this.mapDocumentToProject(doc)
        ),
        total: response.total,
      };
    } catch (error) {
      this.handleError('listProjects', error);
      throw error;
    }
  }

  /**
   * Ruft Projekte eines bestimmten Besitzers ab
   */
  async getProjectsByOwner(ownerId: string, limit = 25): Promise<IProjectList> {
    try {
      const queries = [
        Query.equal('ownerId', ownerId),
        Query.limit(limit),
        Query.orderDesc('createdAt'),
      ];

      const response = await this.databases.listDocuments(
        this.databaseId,
        this.collectionId,
        queries
      );

      return {
        projects: response.documents.map((doc) =>
          this.mapDocumentToProject(doc)
        ),
        total: response.total,
      };
    } catch (error) {
      this.handleError('getProjectsByOwner', error);
      throw error;
    }
  }

  /**
   * Mappt Appwrite Document zu IProject
   */
  // eslint-disable-next-line class-methods-use-this
  private mapDocumentToProject(document: Models.Document): IProject {
    return {
      id: document.$id,
      name: document.name,
      description: document.description,
      createdAt: document.createdAt,
      updatedAt: document.updatedAt,
      ownerId: document.ownerId,
    };
  }

  /**
   * Sucht Projekte anhand des Namens
   */
  async searchProjects(searchTerm: string, limit = 25): Promise<IProjectList> {
    try {
      const queries = [
        Query.search('name', searchTerm),
        Query.limit(limit),
        Query.orderDesc('createdAt'),
      ];

      const response = await this.databases.listDocuments(
        this.databaseId,
        this.collectionId,
        queries
      );

      return {
        projects: response.documents.map((doc) =>
          this.mapDocumentToProject(doc)
        ),
        total: response.total,
      };
    } catch (error) {
      this.handleError('searchProjects', error);
      throw error;
    }
  }

  /**
   * Aktualisiert ein Projekt
   */
  async updateProject(
    projectId: string,
    updates: Partial<Omit<IProject, 'id' | 'createdAt' | 'updatedAt'>>
  ): Promise<IProject> {
    try {
      const document = await this.databases.updateDocument(
        this.databaseId,
        this.collectionId,
        projectId,
        {
          ...updates,
          updatedAt: new Date().toISOString(),
        }
      );

      return this.mapDocumentToProject(document);
    } catch (error) {
      this.handleError('updateProject', error);
      throw error;
    }
  }

  /**
   * Löscht ein Projekt
   */
  async deleteProject(projectId: string): Promise<void> {
    try {
      await this.databases.deleteDocument(
        this.databaseId,
        this.collectionId,
        projectId
      );
    } catch (error) {
      this.handleError('deleteProject', error);
      throw error;
    }
  }

  /**
   * Prüft, ob ein Projekt existiert
   */
  async projectExists(projectId: string): Promise<boolean> {
    try {
      await this.getProject(projectId);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Zählt die Anzahl der Projekte eines Besitzers
   */
  async countProjectsByOwner(ownerId: string): Promise<number> {
    try {
      const response = await this.databases.listDocuments(
        this.databaseId,
        this.collectionId,
        [
          Query.equal('ownerId', ownerId),
          Query.limit(1), // Wir brauchen nur den total count
        ]
      );

      return response.total;
    } catch (error) {
      this.handleError('countProjectsByOwner', error);
      throw error;
    }
  }

  /**
   * Zentrale Fehlerbehandlung
   */
  // eslint-disable-next-line class-methods-use-this
  private handleError(method: string, error: unknown): void {
    console.error(`ProjectService.${method}:`, error);

    // Hier könntest du weitere Fehlerbehandlung hinzufügen:
    // - Logging Service
    // - Error Tracking (Sentry, etc.)
    // - Custom Error Messages
  }
}

// Singleton Pattern für einfache Verwendung
let projectServiceInstance: ProjectService | null = null;

export const createProjectService = (client: Client): ProjectService => {
  if (!projectServiceInstance) {
    projectServiceInstance = new ProjectService(client);
  }
  return projectServiceInstance;
};

export const getProjectService = (): ProjectService => {
  if (!projectServiceInstance) {
    throw new Error(
      'ProjectService not initialized. Call createProjectService first.'
    );
  }
  return projectServiceInstance;
};
