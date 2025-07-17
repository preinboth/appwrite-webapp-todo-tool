<template>
  <q-page padding>
    <q-btn label="Ping Appwrite" @click="runFunction" />
    <div v-if="result">
      <pre>{{ result }}</pre>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { callPingFunction } from 'src/services/appwriteFnPing';

defineOptions({
  name: 'PingPage',
});

const result = ref<string | null>(null);
const functionId = import.meta.env.VITE_APPWRITE_FUNCTION_ID_PING;

async function runFunction() {
  result.value = await callPingFunction(functionId);
}
</script>
