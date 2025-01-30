<template>
  <div class="">
    <UiH2>Регистрация</UiH2>
    <form @submit="onSubmit" class="mb-4">
      <div class="flex flex-col gap-y-3 mb-6">
        <VFormComponent :field="email" />
        <VFormComponent :field="password" />
      </div>
      <UiBtn class="w-full justify-center">Войти</UiBtn>
    </form>
    <div class="text-sm">
      У вас есть аккаунт?&nbsp;<button
        @click="emits('activeLoginForm')"
        class="text-sky-400"
      >
        Войти
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";

interface IProps {
  registerClose: Function;
}
const props = defineProps<IProps>();
const emits = defineEmits(["activeLoginForm"]);

const { handleSubmit } = useForm();

const email = ref({
  name: "email",
  type: "text",

  bind: {
    label: "Почта",
    placeholder: "Введите вашу почту",
  },
});

const password = ref({
  name: "password",
  type: "text",

  bind: {
    label: "Пароль",
    placeholder: "Введите пароль",
  },
});

const onSubmit = handleSubmit((values) => {
  console.log(values);
});
</script>
