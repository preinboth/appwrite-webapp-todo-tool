import { defineStore } from 'pinia';
import { account } from 'src/boot/appwrite';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: null as null | any,
    loading: false,
    initialized: false,
  }),

  getters: {
    isLoggedIn(): boolean {
      return !!this.user;
    },
  },

  actions: {
    async initializeAuth() {
      if (this.initialized) return;

      this.loading = true;
      try {
        this.user = await account.get();
      } catch {
        this.user = null;
      } finally {
        this.loading = false;
        this.initialized = true;
      }
    },

    async refreshAuth() {
      this.loading = true;
      try {
        this.user = await account.get();
      } catch {
        this.user = null;
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      try {
        await account.deleteSession('current');
      } catch (error) {
        console.error('Logout error:', error);
      }
      this.user = null;
    },
  },
});
