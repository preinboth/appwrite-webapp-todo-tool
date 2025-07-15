<template>
  <q-header elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>
        Title
      </q-toolbar-title>
    </q-toolbar>

    <NavbarHeader />
  </q-header>
</template>
<script setup lang="ts">
import NavbarHeader from './NavbarHeader.vue';
</script>

<style lang="sass" scoped></style>
