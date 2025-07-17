import { defineStore } from 'pinia';
import { projectService } from 'src/services';
import type { IProject, IProjectList } from 'src/types/project';

export const useProjectStore = defineStore('project', {
  state: (): {
    projects: IProjectList;
    currentProject: IProject | null;
    loading: boolean;
    error: string | null;
  } => ({
    projects: {
      projects: [],
      total: 0,
    },
    currentProject: null,
    loading: false,
    error: null,
  }),

  getters: {
    projectCount: (state): number => state.projects.total,
    hasProjects: (state): boolean => state.projects.projects.length > 0,
  },

  actions: {
    /**
     * Lädt alle Projekte
     */
    async fetchProjects(): Promise<void> {
      this.loading = true;
      this.error = null;

      try {
        this.projects = await projectService.listProjects();
      } catch (error) {
        this.error = error instanceof Error ? error.message : 'Unknown error';
      } finally {
        this.loading = false;
      }
    },
    /**
     * Erstellt ein neues Projekt
     */
    async createProject(
      projectData: Omit<IProject, 'id' | 'createdAt' | 'updatedAt'>
    ): Promise<void> {
      try {
        const newProject = await projectService.createProject(projectData);
        this.projects.projects.unshift(newProject);
        this.projects.total++;
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : 'Failed to create project';
        throw error;
      }
    },

    /**
     * Wechselt zum angegebenen Projekt
     */
    async changeProject(projectId: string): Promise<void> {
      this.loading = true;
      this.error = null;

      try {
        // Prüfe zuerst, ob das Projekt bereits im lokalen State ist
        const existingProject = this.projects.projects.find(
          (p) => p.id === projectId
        );

        if (existingProject) {
          // Projekt ist bereits geladen, verwende es
          this.currentProject = existingProject;
        } else {
          // Projekt muss von der API geladen werden
          const project = await projectService.getProject(projectId);
          this.currentProject = project;

          // Optional: Projekt zur Liste hinzufügen, falls es noch nicht da ist
          if (!this.projects.projects.some((p) => p.id === projectId)) {
            this.projects.projects.push(project);
            this.projects.total++;
          }
        }
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : 'Failed to change project';
        this.currentProject = null;
        throw error;
      } finally {
        this.loading = false;
      }
    },

    /**
     * Wechselt zum Projekt anhand des Index in der Liste
     */
    changeProjectByIndex(index: number): void {
      if (index >= 0 && index < this.projects.projects.length) {
        this.currentProject = this.projects.projects[index];
      } else {
        this.error = 'Invalid project index';
      }
    },

    /**
     * Aktualisiert ein Projekt
     */
    async updateProject(
      projectId: string,
      updates: Partial<Omit<IProject, 'id' | 'createdAt' | 'updatedAt'>>
    ): Promise<void> {
      this.loading = true;
      this.error = null;

      try {
        const updatedProject = await projectService.updateProject(
          projectId,
          updates
        );

        // Aktualisiere das Projekt in der Liste
        const index = this.projects.projects.findIndex(
          (p) => p.id === projectId
        );
        if (index !== -1) {
          this.projects.projects[index] = updatedProject;
        }

        // Aktualisiere current project falls es das gleiche ist
        if (this.currentProject?.id === projectId) {
          this.currentProject = updatedProject;
        }
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : 'Failed to update project';
        throw error;
      } finally {
        this.loading = false;
      }
    },

    /**
     * Löscht ein Projekt
     */
    async deleteProject(projectId: string): Promise<void> {
      try {
        await projectService.deleteProject(projectId);
        this.projects.projects = this.projects.projects.filter(
          (p) => p.id !== projectId
        );
        this.projects.total--;
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : 'Failed to delete project';
        throw error;
      }
    },

    /**
     * Sucht Projekte
     */
    async searchProjects(searchTerm: string): Promise<void> {
      this.loading = true;
      this.error = null;

      try {
        this.projects = await projectService.searchProjects(searchTerm);
      } catch (error) {
        this.error =
          error instanceof Error ? error.message : 'Failed to search projects';
      } finally {
        this.loading = false;
      }
    },

    /**
     * Lädt Projekte eines bestimmten Besitzers
     */
    async fetchProjectsByOwner(ownerId: string): Promise<void> {
      this.loading = true;
      this.error = null;

      try {
        this.projects = await projectService.getProjectsByOwner(ownerId);
      } catch (error) {
        this.error =
          error instanceof Error
            ? error.message
            : 'Failed to fetch projects by owner';
      } finally {
        this.loading = false;
      }
    },

    /**
     * Setzt das aktuelle Projekt zurück
     */
    clearCurrentProject(): void {
      this.currentProject = null;
    },

    /**
     * Löscht alle Fehler
     */
    clearError(): void {
      this.error = null;
    },

    /**
     * Setzt den gesamten Store zurück
     */
    resetStore(): void {
      this.projects = {
        projects: [],
        total: 0,
      };
      this.currentProject = null;
      this.loading = false;
      this.error = null;
    },
  },
});
