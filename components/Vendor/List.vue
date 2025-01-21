<template>
  <div
    class="grid grid-cols-[repeat(5,minmax(160px,1fr))] gap-4 max-md:gap-3 overflow-auto"
  >
    <VendorItem v-for="vendor in vendors" :key="vendor.id" :vendor="vendor" />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  vendors: IVendor[];
}

const props = defineProps<IProps>();
</script>
