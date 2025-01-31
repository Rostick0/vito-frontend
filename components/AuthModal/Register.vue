<template>
  <div class="">
    <UiH2>Регистрация</UiH2>
    <form @submit="onSubmit" class="mb-4">
      <div class="flex flex-col gap-y-3 mb-6">
        <VFormComponent :field="email" />
        <VFormComponent :field="password" />
        <VFormComponent :field="repeat_password" />
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
import type { IRegister } from "~/interfaces/models/User";

interface IProps {
  registerClose: Function;
}
const props = defineProps<IProps>();
const emits = defineEmits(["activeLoginForm"]);

const { register } = await useAuth();

const { handleSubmit, setErrors } = useForm<IRegister>();

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
    type: "password",
  },
});

const repeat_password = ref({
  name: "repeat_password",
  type: "text",

  bind: {
    label: "Подтвердите пароль",
    placeholder: "Введите пароль ещё раз",
    type: "password",
  },
});

const onSubmit = handleSubmit(async (repeat_password, ...values) => {
  const res = await register(values);

  if (res) {
    setErrors(res);
  } else {
    props.registerClose();
  }
});
</script>
