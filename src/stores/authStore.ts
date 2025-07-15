import { defineStore } from 'pinia';
import { account } from 'src/boot/appwrite';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    user: null as null | any,
    loading: false,
  }),

  actions: {
    async fetchUser() {
      this.loading = true;
      try {
        const user = await account.get();
        debugger;
        this.user = user;
      } catch {
        this.user = null;
      } finally {
        this.loading = false;
      }
    },

    async logout() {
      await account.deleteSession('current');
      this.user = null;
    },

    isLoggedIn(): boolean {
      return !!this.user;
    },
  },
});
