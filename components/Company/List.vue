<template>
  <div class="grid gap-4 grid-cols-5">
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
