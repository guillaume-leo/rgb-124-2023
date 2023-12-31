<script setup>
const counter = useState('counter', () => 9)
</script>

<template>
  <ClientOnly>
    <TresCanvas @click="() => counter = (counter + 1) % 10" :style="{
      background: 'white', 
      width: 'unset', 
      height: 'unset', 
      minWidth: '100%'
      }" 
      clear-color="white"
      >

      <TresPerspectiveCamera :position="[0, 0, 8]" />
      <OrbitControls enable-damping />

      <Suspense>
        <Environment files="environment.hdr" />
      </Suspense>

      <Levioso :speed="8" rotation-factor="0.125" float-factor="0.75">
        <Suspense>
          <Shape/>
        </Suspense>
      </Levioso>

      <TresDirectionalLight
        :intensity="0.125"
        :position="[0, 1, 3]"
      />

      <TresDirectionalLight
        :intensity="0.5"
        :position="[0, -1, -3]"
      />

      <TresDirectionalLight
        :intensity="0.5"
        :position="[-5, -1, 3]"
      />

      <!-- <MouseParallax
        :factor="2"
        :ease="2"
      /> -->

    </TresCanvas>
  </ClientOnly>
</template>

<style scoped></style>
