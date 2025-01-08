<template>
  <div class="flex flex-col min-h-screen">
    <LayoutHeader />
    <main class="bg-gray-100 py-6 grow">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

<script lang="ts" setup>
</script>
