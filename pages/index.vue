<script setup lang="ts">
// const counterObj = useCounter();
// console.log(counterObj.count);

const { count, increment, decrement } = useCounter();

</script>
<template>
    <div>
        index
        <h1>{{ count }}</h1>

        <v-btn @click="increment">+</v-btn>

        <v-btn @click="decrement">-</v-btn>
    </div>
</template>