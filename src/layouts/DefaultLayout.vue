<template>
  <q-layout view="hHh lpR fFf">
    <MainHeader />

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>
<script setup lang="ts">
import MainHeader from 'src/components/header/MainHeader.vue';

defineOptions({
  name: 'DefaultLayout',
});
</script>
