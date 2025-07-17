<template>
  <div class="q-pa-md">
    <div v-if="auth.isLoggedIn">
      <h5>Willkommen, {{ auth.user.name }}</h5>
      <p>E-Mail: {{ auth.user.email }}</p>
      <p>Phone: {{ auth.user.phone }}</p>
      <p>User-ID: {{ auth.user.$id }}</p>
      <p>Prefs: {{ auth.user.prefs }}</p>
      <p>Labels: {{ auth.user.labels }}</p>
      <p>{{ auth.user }}</p>

      <q-btn
        color="negative"
        @click="handleLogout"
        :loading="logoutLoading"
        class="q-mt-md"
      >
        Abmelden
      </q-btn>

      <q-btn
        color="primary"
        @click="refreshUserData"
        :loading="refreshLoading"
        class="q-mt-md q-ml-md"
      >
        Daten aktualisieren
      </q-btn>
    </div>

    <div v-else class="text-center">
      <p>Nicht eingeloggt</p>
      <q-btn color="primary" @click="goToLogin"> Zum Login </q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'stores/authStore'; // Adjusted import path
import { useUserStore } from 'stores/userStore';

defineOptions({
  name: 'UserProfilePage',
});

const auth = useAuthStore();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const user = useUserStore();
const router = useRouter();
const logoutLoading = ref(false);
const refreshLoading = ref(false);

async function handleLogout() {
  logoutLoading.value = true;
  await auth.logout();
  router.push({ name: 'OAuthGoogleSignIn' });
  logoutLoading.value = false;
}

async function refreshUserData() {
  refreshLoading.value = true;
  await auth.refreshAuth();
  refreshLoading.value = false;
}

function goToLogin() {
  router.push({ name: 'OAuthGoogleSignIn' });
}
</script>
