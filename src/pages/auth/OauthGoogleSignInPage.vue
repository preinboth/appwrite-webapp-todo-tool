<template>
  <div class="column items-center justify-center q-pa-xl">
    <h5 class="text-primary">Melde dich mit Google an</h5>
    <q-card class="q-mt-lg" style="max-width: 300px">
      <q-card-section class="text-center">
        <q-btn
          unelevated
          color="red-8"
          class="full-width"
          @click="handleGoogleLogin"
          :loading="isLoading"
          :disable="isLoading"
        >
          <template v-slot:loading>
            <q-spinner color="white" size="20px" />
          </template>
          Google Login
        </q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>
<script setup lang="ts">
import { account, OAuthProvider } from 'src/boot/appwrite';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

// Refs & Router
const $q = useQuasar();
const router = useRouter();
const isLoading = ref(false);

// Google Login Handler
async function handleGoogleLogin() {
  isLoading.value = true;
  try {
    const successURL =
      window.location.origin + router.resolve({ name: 'OAuthSuccess' }).href;
    const failureURL =
      window.location.origin + router.resolve({ name: 'OAuthFailure' }).href;

    await account.createOAuth2Session(
      OAuthProvider.Google, // provider
      successURL, // redirect here on success
      failureURL, // redirect here on failure
      ['email', 'profile'] // optional scopes
    );
  } catch (err) {
    const error = err as Error;
    console.error('[OAuth Error]', error);

    $q.notify({
      type: 'negative',
      message: 'Login fehlgeschlagen',
      caption: error.message,
      icon: 'error',
      timeout: 5000,
    });
  } finally {
    isLoading.value = false;
  }
}
</script>
<style lang="sass" scoped></style>
