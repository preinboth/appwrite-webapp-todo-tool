<template>
  <div>
    <!-- Projekt-Liste -->
    <div v-for="(project, index) in projectStore.projects" :key="project.id">
      <div>
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>
        <button @click="handleProjectChange(project.id)">Projekt wechseln</button>
        <button @click="selectProjectByIndex(index)">Projekt per Index wechseln</button>
      </div>
    </div>

    <!-- Aktuelles Projekt anzeigen -->
    <div v-if="projectStore.currentProject">
      <h2>{{ projectStore.currentProject.name }}</h2>
      <p>{{ projectStore.currentProject.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProjectStore } from 'src/stores/projectStore';

const projectStore = useProjectStore();

// Projekt wechseln
const handleProjectChange = async (projectId: string) => {
  try {
    await projectStore.changeProject(projectId);
    console.log('Current project:', projectStore.currentProject);
  } catch (error) {
    console.error('Failed to change project:', error);
  }
};

// Projekt per Index wechseln
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const selectProjectByIndex = (index: number) => {
  projectStore.changeProjectByIndex(index);
};
</script>
