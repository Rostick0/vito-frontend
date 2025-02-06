<template>
  <div class="flex">
    <IconStar
      v-for="starClass in starClasses"
      :class="starClass"
      width="16"
      height="16"
    />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  value?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  value: 0,
});

const starClasses = computed(() =>
  [...new Array(5)].map((_, i) =>
    props.value > i + 0.5 ? "fill-yellow-400" : "fill-gray-200"
  )
);
</script>
