<template>
  <div v-show="!ready" class="wrapper loading">
    <div class="spinning-square"></div>
  </div>

  <div class="wrapper">
    <p v-show="ready">{{ title }}</p>
    <video class="player" ref="videoPlayer"></video>
  </div>
</template>

<script>
import videojs from "video.js";

export default {
  name: "VideoPlayer",
  props: {
    options: {
      type: Object,
      default() {
        return {};
      },
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      player: null,
      ready: false,
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {});
    this.player.ready(() => {
      this.ready = true;
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>

<style>
video {
  width: 100%;
}
</style>

<style scoped>
.wrapper {
  /* outline: solid 1px black; */
  overflow: hidden;
  min-height: 150px;
}

@media (min-width: 501px) {
  .wrapper {
    min-height: 139px;
  }
}

@media (min-width: 701px) {
  .wrapper {
    min-height: 196px;
  }
}

@media (min-width: 1000px) {
  .wrapper {
    min-height: 272px;
  }
}
.loading {
  /* min-height: 240px; */
  display: flex;
}

p {
  position: absolute;
}

.player-container {
  position: relative;
  display: flex;
}

.player {
  display: flex;
  min-width: 100%;
  max-width: fit-content;
  height: auto;
}

.spinning-square {
  width: 150px;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  margin: auto;
  clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  animation: rescale 5s infinite;
}

@keyframes rescale {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(36deg);
  }
  20% {
    transform: rotate(72deg);
  }
  30% {
    transform: rotate(108deg);
  }
  40% {
    transform: rotate(144deg);
  }
  50% {
    transform: rotate(180deg);
  }
  60% {
    transform: rotate(216deg);
  }
  70% {
    transform: rotate(252deg);
  }
  80% {
    transform: rotate(288deg);
  }
  90% {
    transform: rotate(334deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
