<script setup lang="ts">
let email: string = ref<string>("");
let password: string = ref<string>("");
// 1. почему так?
// 2. как работает реактивность в nuxt?
// 3. 
function submit()
{
    console.log('submit, data:');
    console.log(email.value, password.value);
}
</script>
<template>
    <v-row class="d-flex justify-center">
        <v-col cols="4">
            <v-text-field v-model="email" label="Email" type="email"></v-text-field>
            <v-text-field v-model="password" label="Пароль" type="password"></v-text-field>
            <v-btn @click="submit">Войти</v-btn>
        </v-col>
    </v-row>
</template>