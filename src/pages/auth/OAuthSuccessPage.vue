<template>
  <div class="column items-center justify-center q-pa-xl">
    <q-spinner color="primary" size="50px" />
    <p class="q-mt-md">Anmeldung wird verarbeitet...</p>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/authStore';

defineOptions({
  name: 'OAuthSuccessPage',
});

const router = useRouter();
const auth = useAuthStore();

onMounted(async () => {
  // Aktualisiere den Auth-Status nach OAuth
  await auth.refreshAuth();

  // Weiterleitung
  if (auth.isLoggedIn) {
    router.push({ name: 'UserProfile' });
  } else {
    router.push({ name: 'OAuthGoogleSignIn' });
  }
});
</script>

<style lang="sass" scoped></style>
