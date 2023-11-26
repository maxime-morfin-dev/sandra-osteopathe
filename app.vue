<template>
  <div class="layout">
    <h1 class="title">Sandra Querrien Ostéopathe</h1>
    <div class="content">
      <div class="info">
        <p>Le site est en cours de construction ...</p>
        <p>Il sera bientôt disponible 🎉</p>
        <p>En attendant n'hésitez pas a prendre rendre-vous sur Doctolib</p>
      </div>
      <NuxtLink
        to="https://www.doctolib.fr/osteopathe/brest/sandra-querrien"
        class="link"
        >Prendre rendez-vous</NuxtLink
      >
    </div>
  </div>
</template>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
.layout {
  width: auto;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  padding: 1rem;
  align-items: center;
  font-family: sans-serif;
  color: rgb(41, 41, 41);
  background-color: rgb(240, 237, 232);
}

.title {
  font-size: xx-large;
  text-transform: uppercase;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info {
  font-size: large;
}

.link {
  text-decoration: none;
  text-align: center;
  color: rgb(41, 41, 41);
  padding: 1rem;
  border: 1px solid rgb(41, 41, 41);
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
}
.link:hover {
  background-color: rgb(41, 41, 41);
  color: white;
}
</style>
