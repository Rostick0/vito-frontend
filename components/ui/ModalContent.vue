<template>
  <div class="modal-content bg-white rounded-2xl p-4">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.modal-content {
  overflow: auto;
  max-height: calc(100vh - 40px);
}
</style>
