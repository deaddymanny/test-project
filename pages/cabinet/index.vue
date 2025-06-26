<script setup lang = "ts">
const {count} = useCounter();
const {user} = useAuth();
</script>
<template>
    <h1>{{ count }}</h1>
    cabinet index
    <h2>{{ user }}</h2>
</template>