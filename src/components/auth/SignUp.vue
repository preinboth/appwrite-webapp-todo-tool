<template>
  <div class="column q-pa-lg">
    <h6>SignUp-Component</h6>
    <div class="row">
      <q-card square class="shadow-24" style="width: 300px; height: 485px">
        <q-card-section class="bg-deep-purple-7">
          <h4 class="text-h5 text-white q-my-md">Registration</h4>
          <div
            class="absolute-bottom-right q-pr-md"
            style="transform: translateY(50%)"
          >
            <q-btn
              fab
              icon="close"
              color="purple-4"
              @click="showRegister = false"
            />
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl q-pb-lg">
            <q-input
              square
              clearable
              v-model="signup.email"
              type="email"
              label="Email"
            >
              <template v-slot:prepend>
                <q-icon name="email" />
              </template>
            </q-input>
            <q-input
              square
              clearable
              v-model="signup.username"
              type="text"
              label="Username"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>
            <q-input
              square
              clearable
              v-model="signup.password"
              type="password"
              label="Password"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-lg">
          <q-btn
            unelevated
            size="lg"
            color="purple-4"
            class="full-width text-white"
            label="Get Started"
            @click="onRegister"
          />
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
          <p class="text-grey-6 cursor-pointer" @click="showRegister = false">
            Return to login
          </p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const signup = ref({
  email: '',
  username: '',
  password: '',
});

const showRegister = ref(false);

function onRegister() {
  console.log('Register with', signup.value);
  // Implementiere Registrierungs-Logik
}
</script>

<style lang="sass" scoped></style>
