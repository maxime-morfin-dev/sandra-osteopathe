<script setup lang="ts">
const { x, y } = useMouse();
const url = import.meta.env.VITE_DOCTOLIB_URL;
</script>

<template>
  <div flex="~ items-center justify-center" bg-base h-100dvh>
    <AppCard>
      <AppHeadingOne> Sandra Querrien Ostéopathe </AppHeadingOne>
      <NuxtImg
        src="/under-construct-website.jpg"
        loading="lazy"
        alt="builders at work"
        b-rounded-md
        mt4
      />
      <div flex="~ items-center justify-center gap2" pt4>
        <p text="left lg">Site en cours de construction</p>
        <div class="i-svg-spinners-blocks-shuffle-3" />
      </div>
      <AppButton :url="url">Prendre un rendez-vous</AppButton>
    </AppCard>
  </div>
</template>
