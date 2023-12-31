

<script setup>
import  { AnimationUtils, LoopOnce }  from "three"
const { scene: model, nodes, materials, animations } = await useGLTF('/AnimationLogov4.glb')

const props = defineProps({
  anim: {
    type: Number,
    default: 9
  }
})

materials[''].roughness = 0
const { actions, mixer } = useAnimations(animations, model)

const clips = [
  actions['LIGNE_DOWN|CINEMA_4D_Main|Layer0'].getClip(),
  actions['LIGNE_TOP|CINEMA_4D_Main|Layer0'].getClip(),
  actions['Neutre|CINEMA_4D_Main|Layer0'].getClip(),
  actions['cube_center|CINEMA_4D_Main|Layer0'].getClip(),
  actions['fleche_down|CINEMA_4D_Main|Layer0'].getClip(),
  actions['fleche_down|CINEMA_4D_Main|Layer0'].getClip(),
  actions['model_split|CINEMA_4D_Main|Layer0'].getClip(),
]

const parts = []

for (let i = 0; i < 10; i++) {
  const startAt = i * 30 + 1
  const endAt = startAt + 31
  let cuttedClips = clips.map(clip => {
    const action = mixer.clipAction( AnimationUtils.subclip(clip, 'part_' + i, startAt, endAt) )
    action.setLoop(LoopOnce) 
    action.clampWhenFinished = true;
    return action
  })
  parts.push(cuttedClips)
}

const counter = useState('counter')

watch(counter, (newVal, previousVal) => {
  parts[previousVal].map(p => p.fadeOut(0))
  parts[newVal].map(p => {
    p.reset()
    p.play()
  })
})

onMounted(() => {
  parts[9].map(p => p.play())
})

</script>

<template>
  <primitive :object="model"/>
</template>
