<script setup lang="ts">
const { count } = useCounter();
const { user } = useAuth();
</script>
<template>
  <div>
    cabinet index
    {{ count }}
    <h2>
      {{ user }}
    </h2>
  </div>
</template>
