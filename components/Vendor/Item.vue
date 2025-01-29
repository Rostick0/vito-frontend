<template>
  <NuxtLink
    class="vendor-item rounded-lg bg-white flex gap-x-2 justify-between items-center py-3 px-4 hover:bg-slate-50"
    :to="ROUTES_NAMES.brands(vendor?.name?.toLowerCase())"
  >
    <div class="font-bold">{{ vendor?.name }}</div>
    <img
      class="object-contain w-10 h-10"
      :src="vendor?.image?.image?.path ?? DEFAULT_IMAGE"
      :alt="vendor?.name"
      @error="setDefaultImgSrc"
      v-lazy-load
      width="40"
      height="40"
      loading="lazy"
    />
  </NuxtLink>
</template>

<script lang="ts" setup>
interface IProps {
  vendor: IVendor;
}

const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.vendor-item {
  // &:nth-child(-n + 3) {

  // }
}
</style>
