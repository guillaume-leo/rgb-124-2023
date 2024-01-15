<template>
  <div class="main" ref="section">
    <button @click="handleIsOpen()">OPEN</button>
    <Collapse
      as="section"
      :base-height="baseHeight"
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
const baseHeight = ref(350);

const handleIsOpen = () => (isOpen.value = !isOpen.value);
const handleExpand = () => {
  section.value.scrollIntoView({
    behavior: "smooth",
  });
  baseHeight.value = 0;
};
</script>

<style scoped>
button {
  all: unset;
  cursor: pointer;
}
</style>
