<template>
  <div class="flex flex-col gap-5">
    <CardAdvertisementRowItem
      v-for="advertisement in advertisements"
      :key="advertisement?.id"
      :advertisement="advertisement"
    />
  </div>
</template>

<script lang="ts" setup>
interface IProps {
  advertisements: IAdvertisement[];
}

const props = defineProps<IProps>();
</script>
