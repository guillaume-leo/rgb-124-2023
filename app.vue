<template>
  <div class="main">
    <div class="main__hero hero">
      <div class="hero__logo">
        <Logo3D />
      </div>
      <div class="hero__text">
        ALEX GD BLABALBA
      </div>
    </div>
  </div>
</template>

<script setup>

useHead({
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,600;1,700;1,900&display=swap',
      crossorigin: ''
    }
  ]
})

</script>

<style scoped lang="scss">
.main {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Saira', sans-serif;
  &__hero {
    max-width: 100%;
  }
}

.hero {
  min-height: 20rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  &__logo {
    min-width: 100%;
  }
  &__text {
    min-width: 100%;
  }
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
}
/* html {
  height: 100vh;
  display: flex;
}

body, #__nuxt {
  height: 100%;
  max-width: 100%;
} */
</style>