<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useAuthStore } from 'src/stores/authStore';

defineOptions({
  name: 'App',
});

const auth = useAuthStore();

onMounted(async () => {
  await auth.initializeAuth();
});
</script>
