<script setup>
import { LoopOnce } from "three";

const shapes = [
  await useGLTF("3d/shape_00.glb"),
  await useGLTF("3d/shape_01.glb"),
  await useGLTF("3d/shape_02.glb"),
  await useGLTF("3d/shape_03.glb"),
  await useGLTF("3d/shape_04.glb"),
  await useGLTF("3d/shape_05.glb"),
  await useGLTF("3d/shape_06.glb"),
  await useGLTF("3d/shape_07.glb"),
  await useGLTF("3d/shape_08.glb"),
  await useGLTF("3d/shape_09.glb"),
];

const counter = useState("counter");
const is_animating = useState("is_animating", () => false);

shapes.forEach((shape) => {
  shape.materials[""].roughness = 0;
});

watch(counter, (newVal, prevVal) => {
  animate(newVal, prevVal);
});

const animate = (newVal, prevVal) => {
  is_animating.value = true;
  if (prevVal) {
    const { actions: prevActions } = useAnimations(
      shapes[prevVal].animations,
      shapes[0].scene
    );
    Object.values(prevActions).map((action) => {
      action.fadeOut(1);
    });
  }
  const { actions } = useAnimations(shapes[newVal].animations, shapes[0].scene);
  Object.values(actions).map((action) => {
    action.setLoop(LoopOnce);
    action.clampWhenFinished = true;
    action.play();
  });

  setTimeout(() => (is_animating.value = false), 1000);
};

onMounted(() => {
  animate(9);
});
</script>

<template>
  <primitive :object="shapes[0].scene" />
</template>
