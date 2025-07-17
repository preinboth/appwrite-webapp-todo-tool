import { functions } from 'boot/appwrite';

export async function callPingFunction(functionId: string): Promise<string> {
  try {
    const execution = await functions.createExecution(functionId);
    return execution.status;
  } catch (error) {
    return 'Fehler beim Funktionsaufruf';
  }
}
