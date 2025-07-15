<template>
  <div v-if="auth.user">
    <p>Willkommen, {{ auth.user.name }}</p>
  </div>
  <div v-else>
    <p>nicht eingeloggt</p>
  </div>
</template>
<script setup lang="ts">
import { useAuthStore } from 'src/stores/authStore';

defineOptions({
  name: 'UserProfilePage',
});

debugger;
const auth = useAuthStore();
</script>

<style lang="sass" scoped></style>
