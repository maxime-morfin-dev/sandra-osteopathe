<script setup lang="ts">
defineProps<{
  url: string;
}>();
</script>

<template>
  <div px4 py2 bg-white text-primary-dark w-fit b-rounded-md mt4 xs:mx-auto>
    <NuxtLink :to="url">
      <slot />
    </NuxtLink>
  </div>
</template>
