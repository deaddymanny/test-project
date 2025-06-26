<script setup lang="ts">
const {login, user} = useAuth();
const router = useRouter()
let email = ref<string>("");
let password = ref<string>("");
// 1. почему так?
// 2. как работает реактивность в nuxt?
// 3*. повторить что было до этого 
function submit()
{
    console.log('submit, data:');
    login(email.value, password.value);
    router.push("/cabinet");
}
</script>
<template>
    <v-row class="d-flex justify-center">
        {{ user }}
        <v-col cols="4">
            <v-text-field v-model="email" label="Email" type="email"></v-text-field>
            <v-text-field v-model="password" label="Пароль" type="password"></v-text-field>
            <v-btn @click="submit">Войти</v-btn>
        </v-col>
    </v-row>
</template>