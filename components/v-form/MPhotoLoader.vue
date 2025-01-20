<template>
  <UiControl
    :label="label"
    :invalid="!!errorMessage || invalid"
    :message="errorMessage || message"
    :rightIcon="rightIcon"
  >
    <UiMPhotoLoader
      v-bind="props"
      @update:modelValue="(images) => emits('update:modelValue', images)"
      @setError="(error) => emits('setError', error)"
      @remove="(image) => emits('remove', image)"
    />
  </UiControl>
</template>

<script setup>
const emits = defineEmits(["update:modelValue", "remove", "setError"]);

const props = defineProps({
  modelValue: [String, Object, Array],
  invalid: Boolean,
  rightIcon: String,
  message: String,
  label: String,
  placeholder: String,
  errorMessage: String,
});
</script>

<style lang="scss" scoped>
.photoloader {
  &__block {
    background-color: rgb(var(--color-white));
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.5rem;
    position: relative;
    text-align: center;
    transition: 0.3s;
    width: 100%;
    height: 250px;
  }

  &__block.error {
    transition: 0.3s;
  }

  &__label {
    font-size: 0.875rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  &__input {
    display: none;
  }

  &__title {
    color: rgb(var(--color-dark));
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.75rem;
    z-index: 2;
  }

  &__subtitle {
    color: rgb(var(--color-dark));
    font-size: 0.75rem;
    z-index: 2;
  }

  &__images {
    display: grid;
    grid-template-columns: repeat(auto-fill, 200px);
    grid-gap: 1rem;
    width: 100%;
  }

  &__image {
    border-radius: 12px;
    padding-top: 66%;
    position: relative;

    &_delete {
      background-color: rgb(var(--color-white));
      color: rgb(var(--color-red));
      border-radius: 4px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      transition: 0.3s;
      width: 1.25rem;
      height: 1.25rem;
      z-index: 1;

      &:hover {
        background-color: rgb(var(--color-pre-white));
      }
    }
  }

  &__img {
    border-radius: 0.33rem;
    user-select: none;
    pointer-events: none;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
