<template>
  <div
    class="company-item rounded-lg bg-white flex justify-between items-center py-3 px-4 hover:bg-slate-50"
  >
    <div class="font-bold">{{ company?.name }}</div>
    <img
      class="object-contain w-10 h-10"
      :src="company?.image?.path"
      :alt="company?.name"
      v-lazy-load
      width="40"
      height="40"
      loading="lazy"
    />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  company: ICompany;
}

const props = defineProps<IProps>();
</script>

<style lang="scss" scoped>
.company-item {
  // &:nth-child(-n + 3) {

  // }
}
</style>
