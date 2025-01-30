<template>
  <div class="photoloader__images" @mouseup="dragElem = null">
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
        accept="image/png,image/jpeg,image/jpg"
      />
      <span class="photoloader__block_content">
        <IconPhoto />
        <strong class="photoloader__title text-xs">Добавить фото</strong>
      </span>
    </label>
    <template v-for="item in modelValue" :key="item.id">
      <div>
        <div @mousedown="dragElem = item">
          <UiDraggable>
            <template #willselect>
              <div
                class="photoloader__image"
                @mouseup="
                  dragElem &&
                    item.id != dragElem.id &&
                    changeOrder(dragElem, item)
                "
              >
                <div
                  class="photoloader__image_delete"
                  @click="handleRemove(item)"
                >
                  ✖
                </div>
                <NuxtImg
                  class="photoloader__img"
                  :src="item?.path"
                  alt="Error"
                  loading="lazy"
                  width="154"
                  height="96"
                />
              </div>
            </template>
            <template #selected>
              <img
                class="photoloader__img_drag"
                :src="item?.path"
                alt="Error"
                v-lazy-load
                width="154"
                height="99"
              />
            </template>
          </UiDraggable>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import debounce from "lodash/debounce";
import { size } from "@vee-validate/rules";
import uniqueId from "lodash/uniqueId";

defineComponent({
  inheritAttrs: false,
});

const emits = defineEmits(["update:modelValue", "remove", "setError"]);

const props = defineProps({
  modelValue: [String, Object, Array],
  label: String,
  placeholder: String,
  errorMessage: String,
  onChange: Function,
});

const dragElem = ref();

const changeOrder = debounce((dragElemArg, el) => {
  const files = [...props.modelValue];

  const first = files.findIndex((i) => i.id == dragElemArg.id);
  const second = files.findIndex((i) => i.id == el.id);

  [files[first], files[second]] = [files[second], files[first]];

  emits("update:modelValue", files);
  dragElem.value = null;
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

  if (!["image/png", "image/jpeg", "image/jpg"].includes(_files[0].type))
    return emits("setError", "The file must be an image");

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
    background-color: rgb(209, 213, 219);
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    position: relative;
    transition: 0.3s;
    width: 154px;
    height: 96px;

    &_content {
      display: flex;
      align-items: center;
      flex-direction: column;
      row-gap: 6px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
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
    z-index: 2;
  }

  &__images {
    display: grid;
    grid-template-columns: repeat(auto-fit, 154px);
    grid-gap: 16px;
    width: 100%;
  }

  &__image {
    position: relative;
    width: 154px;
    height: 96px;

    &_delete {
      background-color: white;
      color: red;
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

  &__img {
    border-radius: 8px;
    pointer-events: none;
    user-select: none;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &_drag {
      border-radius: 8px;
      object-fit: cover;
      width: 154px;
      height: 96px;
      z-index: 10;
    }
  }
}
</style>
