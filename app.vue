<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
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

<style>
* {
  margin: 0;
  padding: 0;
}
</style>