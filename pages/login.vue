<script setup lang="ts">
let email = ref<string>("");
let password = ref<string>("");

function submit() {
  console.log("submit, data:");
  console.log(email.value, password.value);
}

function hover() {
  console.log("hover");
}
</script>
<template>
  <v-row class="d-flex justify-center">
    <v-col cols="4">
      <v-text-field v-model="email" label="email" type="email"></v-text-field>
      <v-text-field
        v-model="password"
        label="password"
        type="password"
      ></v-text-field>
      <v-btn @click="submit">Enter</v-btn>
    </v-col>
  </v-row>
</template>
