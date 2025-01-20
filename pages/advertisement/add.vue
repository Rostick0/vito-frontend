<template>
  <form class="auth-form" @submit="onSubmit" method="post">
    <div class="font-bold text-3xl text-center mb-8">Авторизация</div>
    <div class="auth-form__fields mb-8">
      <div class="mb-4">
        <VFormComponent :field="email" />
      </div>
      <VFormComponent :field="password" />
    </div>
    <button class="auth-form__btn p-2 justify-center w-full" bgColor="blue">
      Войти
    </button>
  </form>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";

const { handleSubmit } = useForm<any>();

const email = ref({
  type: "multiple-select",
  name: "email",
  modelValue: "",

  bind: {
    label: "Почта",
    placeholder: "Введите вашу почту",
    options: [{ id: 1, name: "aboba" }],
  },
});

const password = ref({
  type: "textarea",
  name: "password",
  modelValue: "",

  bind: {
    label: "Пароль",
    placeholder: "Введите пароль",
  },
});

const onSubmit = handleSubmit(async (values) => {
  //   const resErrors = await login(values);
  console.log(values);
  //   errorMessage.value = resErrors?.message;
});

useHead({
  title: "Вход в аккаунт",
});

// definePageMeta({
//   layout: "auth",
//   middleware: ["no-auth"],
// });
</script>

<style lang="scss" scoped></style>
