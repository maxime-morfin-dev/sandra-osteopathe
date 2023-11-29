<script setup lang="ts">
const { x, y } = useMouse();
</script>

<template>
  <div class="text-red">
    Hello world {{ x }} , {{ y }}
    <slot />
  </div>
</template>
