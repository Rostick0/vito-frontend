<template>
  <div class="flex flex-col min-h-screen">
    <LayoutHeader :headerIsSticky="headerIsSticky" />
    <main class="bg-gray-100 pt-8 pb-20 grow">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  headerIsSticky: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  headerIsSticky: true,
});
</script>
