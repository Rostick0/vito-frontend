<template>
  <header
    class="bg-white shadow-md z-20"
    :class="{ 'sticky top-0': headerIsSticky }"
  >
    <div v-if="$device.isDesktop" class="bg-zinc-800 text-white py-3">
      <div class="container flex justify-between mx-auto">
        <nav class="flex gap-4">
          <NuxtLink>Вакансии</NuxtLink>
          <NuxtLink>Помощь</NuxtLink>
        </nav>
        <div class="flex">
          <div class="flex gap-x-2">
            <NuxtLink class="flex" :to="ROUTES_NAMES.favorites">
              <IconFavorite class="fill-zinc-200" />
            </NuxtLink>
            <NuxtLink class="flex" :to="ROUTES_NAMES.notifications">
              <IconNotification class="fill-zinc-200" />
            </NuxtLink>
            <button v-if="user">
              <span>Профиль</span>
            </button>
            <button v-else @click="loginOpen" class="flex gap-x-1">
              <IconLogin class="fill-white" />
              <span>Авторизация</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container flex mx-auto py-3">
      <NuxtLink
        v-if="$device.isDesktop"
        class="flex shrink-0 mr-5"
        :to="ROUTES_NAMES.main"
      >
        <Logo />
      </NuxtLink>
      <UiBtn class="items-center gap-x-2 mr-2">
        <IconList class="fill-white" />
        <span v-if="$device.isDesktop">Каталог</span>
      </UiBtn>
      <Search />
      <NuxtLink
        v-if="$device.isDesktop"
        class="flex gap-x-2 items-center self-center font-semibold ml-8 whitespace-nowrap"
        :to="ROUTES_NAMES.advertisementAdd"
      >
        <IconWindowAdd />
        <span>Разместить объявление</span>
      </NuxtLink>
    </div>
  </header>

  <UiModal :name="loginModal">
    <UiModalContent class="w-full max-w-sm">
      <AuthModalLogin
        @activeRegisterForm="loginClose(), registerOpen()"
        :loginClose="loginClose"
      />
    </UiModalContent>
  </UiModal>

  <UiModal :name="registerModal">
    <UiModalContent class="w-full max-w-sm">
      <AuthModalRegister
        @activeLoginForm="registerClose(), loginOpen()"
        :registerClose="registerClose"
      />
    </UiModalContent>
  </UiModal>
</template>

<script setup lang="ts">
interface IProps {
  headerIsSticky?: boolean;
}

const props = defineProps<IProps>();

const user = useState<IUser | null>("user");

const loginModal = "login";
const registerModal = "register";

const { open: loginOpen, close: loginClose } = useModal({ name: loginModal });
const { open: registerOpen, close: registerClose } = useModal({
  name: registerModal,
});
</script>
