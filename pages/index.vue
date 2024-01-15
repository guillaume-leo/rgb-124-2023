<template>
  <div class="main">
    <div class="main__hero hero">
      <div class="hero__logo">
        <Logo3D />
      </div>
      <div class="hero__text">ALEX GD BLABALBA</div>
    </div>
    <CollapsedSection>
      <template #videos>
        <div v-if="projects" v-for="video in projects" class="video">
          <p>{{ video.HOME_TITLE }}</p>
          <video-player
            :options="{
              autoplay: true,
              controls: false,
              muted: true,
              loop: true,
              sources: [
                {
                  src: video.HLS,
                  type: 'application/x-mpegURL',
                },
              ],
            }"
          />
        </div>
      </template>
    </CollapsedSection>
  </div>
</template>

<script setup>
import "video.js/dist/video-js.css";
const videos = await useGoogleSheet();
const projects = ref(videos.filter((video) => video.CATEGORY === 1));
const shorts = ref(videos.filter((video) => video.CATEGORY === 2));
</script>

<style scoped lang="scss">
.main {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Saira", sans-serif;
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
