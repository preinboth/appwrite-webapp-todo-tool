<template>
  <div class="column items-center justify-center q-pa-xl">
    <q-icon name="error" size="80px" color="negative" />
    <p class="text-h6 q-mt-md">Anmeldung fehlgeschlagen</p>
    <!-- <q-btn color="primary" @click="$router.push({ name: 'OAuthGoogleSignIn' })"> -->
    <!-- Erneut versuchen
    </q-btn> -->
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'OAuthFailurePage',
});
</script>

<style lang="sass" scoped></style>
