<template>
  <div class="flex">
    <IconStar
      v-for="starClass in starClasses"
      :class="[starClass.class, classStar]"
      @click="emits('update:modelValue', starClass.value)"
      :width="size"
      :height="size"
    />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  classStar?: string;
  value?: number;
  size?: number | string;
}

const props = withDefaults(defineProps<IProps>(), {
  value: 0,
  size: 16,
});

const emits = defineEmits(["update:modelValue"]);

interface IStarClass {
  class: "fill-yellow-400" | "fill-gray-200";
  value: number;
}
// 1 | 2 | 3 | 4 | 5
const starClasses = computed<IStarClass[]>(() =>
  [...new Array(5)].map((_, i) => ({
    class: props.value > i + 0.5 ? "fill-yellow-400" : "fill-gray-200",
    value: i + 1,
  }))
);
</script>
