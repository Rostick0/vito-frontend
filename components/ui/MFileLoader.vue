<template>
  <div class="flex flex-col gap-y-2">
    <label
      class="control__photoloader photoloader__block"
      :class="{ error: errorMessage }"
    >
      <input
        @change="handleOnFileChange"
        @click="$event.target.value = null"
        v-bind="$attrs"
        class="photoloader__input"
        type="file"
      />
      <div class="photoloader__title">Нажмите для загрузки файлов</div>
    </label>
    <div class="photoloader__images">
      <div class="photoloader__image" v-for="item in modelValue" :key="item.id">
        <div class="photoloader__image_delete" @click="handleRemove(item)">
          ✖
        </div>
        <div class="photoloader__content">
          <div class="photoloader__name">
            {{ item?.file?.name }}
          </div>
          <a class="photoloader__link" :href="item?.path" target="_blank"
            >Show</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { size } from "@vee-validate/rules";
import uniqueId from "lodash/uniqueId";

defineComponent({
  inheritAttrs: false,
});

const emits = defineEmits(["update:modelValue", "remove", "setError"]);

const props = defineProps({
  modelValue: [String, Object, Array],
  invalid: Boolean,
  message: String,
  label: String,
  placeholder: String,
  errorMessage: String,
  onChange: Function,
  deps: [Array, Object, String, Number],
  onDepsChange: {
    type: Function,
  },
  forceDeps: Boolean,
});

const handleOnFileChange = (e) => {
  const _files = e.target.files;

  if (!_files?.length) {
    return emits("update:modelValue", []);
  }

  const sizeFile = 16384;

  if (
    !size(_files[0], {
      size: sizeFile,
    })
  )
    return emits("setError", `The image size must be less than ${sizeFile} KB`);

  const file = {
    id: uniqueId(),

    path: URL.createObjectURL(_files[0]),
    file: _files[0],
  };

  emits("update:modelValue", [...(props?.modelValue || []), file]);
};

const handleRemove = (item) => {
  emits(
    "update:modelValue",
    props.modelValue.filter((i) => i.id !== item.id)
  );
};
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
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    width: 100%;
  }

  &__image {
    padding-top: 100%;
    position: relative;

    &_delete {
      background-color: rgb(var(--color-white));
      color: rgb(var(--color-red));
      border-radius: 0.33rem;
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

  &__content {
    background-color: rgb(var(--color-white));
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__link {
    color: rgb(var(--color-blue-light));
    font-size: 12px;
    font-weight: 700;
  }
}
</style>
