<template>
  <q-tabs align="left">
    <q-route-tab :to="{ name: 'Home' }" label="Home" />
    <q-route-tab :to="{ name: 'About' }" label="About" />
    <q-route-tab :to="{ name: 'Imprint' }" label="Imprint" />
    <q-route-tab :to="{ name: 'SignUp' }" label="SignUp" />
    <q-route-tab :to="{ name: 'SignIn' }" label="SignIn" />
    <q-route-tab :to="{ name: 'OAuthGoogleSignIn' }" label="Google  SignIn" />
    <q-route-tab :to="{ name: 'UserProfile' }" label="User Profile" />
  </q-tabs>
</template>
<script setup lang="ts"></script>

<style lang="sass" scoped></style>
