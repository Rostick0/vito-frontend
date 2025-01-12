<template>
  <!--  -->
  <div class="grid grid-cols-[repeat(5,minmax(160px,1fr))] gap-4 overflow-auto">
    <CompanyItem
      v-for="company in companies"
      :key="company.id"
      :company="company"
    />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  companies: ICompany[];
}

const props = defineProps<IProps>();
</script>
