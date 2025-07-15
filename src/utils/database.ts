import type { Models } from 'appwrite';
import { databases, ID } from '../boot/appwrite';

export interface Task extends Models.Document {
  title: string;
  done: boolean;
  dueDate: string; // Appwrite speichert datetime als ISO-8601-String
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
class TasksCollectionService<T extends Models.Document> {
  private databaseId: string;

  private collectionId: string;

  constructor() {
    this.databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
    this.collectionId =
      import.meta.env.VITE_APPWRITE_DATABASE_COLLECTION_TASKS_ID;

    if (!this.databaseId || !this.collectionId) {
      throw new Error('Appwrite-Datenbank oder Collection-ID nicht gesetzt.');
    }
  }

  /**
   * Erstellt ein neues Dokument in der Task-Collection.
   * @param data Die Nutzdaten ohne Appwrite-Metafelder
   * @param documentId Optional: eigene Dokumenten-ID oder ID.unique()
   * @returns Das erstellte Dokument
   */
  public async createDocument(
    data: Omit<T, keyof Models.Document>,
    documentId: string = ID.unique()
  ): Promise<T> {
    return databases.createDocument<T>(
      this.databaseId,
      this.collectionId,
      documentId,
      data
    );
  }
}
