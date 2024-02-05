<template>
  <div class="main" ref="section">
    <button @click="handleIsOpen()">
      <div class="banner" :class="props.type"></div>
    </button>
    <Collapse
      as="section"
      class="section"
      :when="isOpen"
      @expanded="handleExpand"
    >
      <slot name="videos" />
    </Collapse>
  </div>
</template>

<script setup>
import { Collapse } from "vue-collapsed";

const section = ref(null);
const isOpen = ref(false);
// const baseHeight = ref(350);

const handleIsOpen = () => (isOpen.value = !isOpen.value);
const handleExpand = async () => {
  await nextTick();
  section.value.scrollIntoView({
    behavior: "smooth",
  });
  // baseHeight.value = 0;
};

const props = defineProps({
  type: {
    type: String,
    default: null,
  },
});
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: black;
}
@media (min-width: 501px) {
  .section {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

button {
  all: unset;
  cursor: pointer;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  display: flex;
  height: 50px;
  z-index: 1;
}

.banner {
}

.projects {
  background-color: #ff0000;
  background-image: url("./banners/projects_down.png");
  background-size: contain;
  background-repeat: repeat-x;
  min-height: 100%;
  min-width: 100%;
  background-position: center;
  position: absolute;
  animation: h-scroll linear 24s infinite;
}

@keyframes h-scroll {
  0% {
    background-position-x: 0px;
  }
  100% {
    background-position-x: 885px;
  }
}

@media (max-width: 501px) {
  .projects {
    background-size: cover;
  }
}
</style>
