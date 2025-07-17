import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useUserStore = defineStore('user', () => {
  // State
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const testVar = ref<string>('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isLoading = ref<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const error = ref<string | null>(null);

  // Getters

  // Helper function to validate response structure

  // Actions
});
