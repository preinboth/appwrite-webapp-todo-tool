<!-- Sign In Card -->
<template>
  <div class="column q-pa-lg">
    <h6>SignIn-Component</h6>
    <div class="row">
      <q-card square class="shadow-24" style="width: 300px; height: 485px">
        <q-card-section class="bg-deep-purple-7">
          <h4 class="text-h5 text-white q-my-md">Company &amp; Co</h4>
          <div
            class="absolute-bottom-right q-pr-md"
            style="transform: translateY(50%)"
          >
            <q-btn
              fab
              icon="add"
              color="purple-4"
              @click="showRegister = true"
            />
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-px-sm q-pt-xl">
            <q-input
              square
              clearable
              v-model="signin.email"
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
              v-model="signin.password"
              type="password"
              label="Password"
            >
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>
          </q-form>
        </q-card-section>
        <q-card-section>
          <div class="text-center q-pa-md q-gutter-md">
            <q-btn round color="indigo-7">
              <q-icon name="fab fa-facebook-f" size="1.2rem" />
            </q-btn>
            <q-btn round color="red-8">
              <q-icon name="fab fa-google-plus-g" size="1.2rem" />
            </q-btn>
            <q-btn round color="light-blue-5">
              <q-icon name="fab fa-twitter" size="1.2rem" />
            </q-btn>
          </div>
        </q-card-section>
        <q-card-actions class="q-px-lg">
          <q-btn
            unelevated
            size="lg"
            color="purple-4"
            class="full-width text-white"
            label="Sign In"
            @click="onSignIn"
          />
        </q-card-actions>
        <q-card-section class="text-center q-pa-sm">
          <p class="text-grey-6">Forgot your password?</p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const signin = ref({
  email: '',
  password: '',
});

const showRegister = ref(false);

function onSignIn() {
  console.log('Sign In with', signin.value);
  // Implementiere Login-Logik
}
</script>

<style lang="sass" scoped></style>
