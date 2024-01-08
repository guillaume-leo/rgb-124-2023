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

<style scoped lang="scss">
.main {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Saira', sans-serif;
  &__hero {
    max-width: 100%;
    outline: 1px black solid;
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