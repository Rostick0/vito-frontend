<template>
  <div class="grow text-center py-10">
    <template v-if="text">
      {{ text }}
    </template>
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  text?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  text: "Ничего не найдно",
});
</script>
