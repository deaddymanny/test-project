<script setup lang="ts">
const { login, user } = useAuth();
const router = useRouter()

let email = ref<string>("");
let password = ref<string>("");

function submit() {
  login(email.value, password.value);
  router.push("/cabinet")
}
</script>
<template>
  <v-row class="d-flex justify-center">
    <v-col cols="4">
      <v-text-field v-model="email" label="email" type="email"></v-text-field>
      <v-text-field v-model="password" label="Пароль" type="password"></v-text-field>

      <v-btn @click="submit">войти</v-btn>
    </v-col>
  </v-row>
</template>