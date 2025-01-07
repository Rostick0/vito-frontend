<template>
  <div
    class="company-item rounded-lg bg-white flex justify-between items-center py-3 px-4 hover:bg-slate-50"
  >
    <div class="font-bold">{{ company?.name }}</div>
    <img
      class="object-contain w-12 h-12"
      :src="company?.image?.path"
      :alt="company?.name"
      width="48"
      height="48"
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
