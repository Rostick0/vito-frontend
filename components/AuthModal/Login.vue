<template>
  <div class="">
    <UiH2>Вход</UiH2>
    <form @submit="onSubmit" class="mb-4">
      <div class="flex flex-col gap-y-3 mb-6">
        <VFormComponent :field="email" />
        <VFormComponent :field="password" />
      </div>
      <UiBtn class="w-full justify-center">Войти</UiBtn>
    </form>
    <div class="text-sm">
      Не имеете аккаунта?&nbsp;<button
        @click="emits('activeRegisterForm')"
        class="text-sky-400"
      >
        Зарегистрироваться
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import type { ILogin } from "~/interfaces/models/User";

interface IProps {
  loginClose: Function;
}
const props = defineProps<IProps>();
const emits = defineEmits(["activeRegisterForm"]);

const { login } = await useAuth();

const { handleSubmit, setErrors } = useForm<ILogin>();

const email = ref({
  name: "email",
  type: "text",
  rules: "required|email|max:255",

  bind: {
    label: "Почта",
    placeholder: "Введите вашу почту",
  },
});

const password = ref({
  name: "password",
  type: "text",
  rules: "required",

  bind: {
    label: "Пароль",
    placeholder: "Введите пароль",
  },
});

const onSubmit = handleSubmit(async (values) => {
  const res = await login(values);

  if (res) {
    setErrors(res);
  } else {
    props.loginClose?.();
  }
});
</script>
