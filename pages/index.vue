<template>
  <div class="main">
    <div class="main__hero hero">
      <div class="hero__logo">
        <Logo3D />
      </div>
      <div class="hero__text">ALEX GD BLABALBA</div>
    </div>
    <CollapsedSection type="projects">
      <template #videos>
        <video-player
          v-if="projects"
          v-for="video in projects"
          :title="video.HOME_TITLE"
          :options="{
            autoplay: true,
            controls: false,
            loadingSpinner: false,
            muted: true,
            loop: true,
            playsinline: true,
            preload: 'metadata',
            disablePictureInPicture: true,
            html5: {
              vhs: {
                overrideNative: true,
                limitRenditionByPlayerDimensions: false,
                useDevicePixelRatio: true,
                experimentalLLHLS: true,
                experimentalBufferBasedABR: true,
                liveSyncDuration: 2.5,
                maxLiveSyncPlaybackRate: 1.1,
              },
            },
            // fluid: true,
            // aspectRatio: '1:1',
            responsive: true,
            suggestedQuality: 'hd',
            sources: [
              {
                src: video.HLS,
                type: 'application/x-mpegURL',
              },
            ],
          }"
        />
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
