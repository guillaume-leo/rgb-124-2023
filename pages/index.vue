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
        <section class="main__section section section--projects">
          <div class="section__banner">BANNER</div>
          <div class="section__videos videos">
            <div class="videos_item"></div>
            <div class="videos_item"></div>
            <div class="videos_item"></div>
            <div class="videos_item"></div>
            <div class="videos_item"></div>
            <div class="videos_item"></div>
          </div>
        </section>
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
  &__section {
    max-height: 40rem;
    display: flex;
    flex-direction: column;
    outline: 1px solid blue;
  }
}

.section {
  &__banner {
    max-height: 10rem;
    outline: 1px solid black;
  }
  &__videos {
    flex-grow: 1;
    outline: 1px solid red;
  }
}

.videos {
  display: flex;
  flex-direction: column;
  min-height: 20rem;
  &__item {
    min-height: 10rem;
  }
}
.hero {
  min-height: 20rem;
  display: none;
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