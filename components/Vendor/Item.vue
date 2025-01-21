<template>
  <div
    class="vendor-item rounded-lg bg-white flex gap-x-2 justify-between items-center py-3 px-4 hover:bg-slate-50"
  >
    <div class="font-bold">{{ vendor?.name }}</div>
    <img
      class="object-contain w-10 h-10"
      :src="vendor?.image_rel?.image?.path"
      :alt="vendor?.name"
      v-lazy-load
      width="40"
      height="40"
      loading="lazy"
    />
  </div>
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
