import { client } from 'src/boot/appwrite';
import { createProjectService } from './ProjectService';

// Services initialisieren
export const projectService = createProjectService(client);

// Alle Services exportieren
export { ProjectService } from './ProjectService';
