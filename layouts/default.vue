<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-white sticky top-0 shadow-md">
      <div class="bg-zinc-800 text-white py-3">
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
              <NuxtLink class="flex gap-x-1" :to="ROUTES_NAMES.login">
                <IconLogin class="fill-white" />
                <span>Авторизация</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="container flex gap-x-4 mx-auto py-3">
        <NuxtLink class="flex" :to="ROUTES_NAMES.main">
          <Logo />
        </NuxtLink>
        <UiBtn class="gap-x-2">
          <IconList class="fill-white" />
          <span>Каталог</span>
        </UiBtn>
        <Search />
      </div>
    </header>
    <main class="bg-gray-100 py-6 grow">
      <slot />
    </main>
    <footer class="bg-white border-t-2 py-3">
      <div class="container mx-auto">
        <div class="flex gap-4 mb-4">
          <NuxtLink>Блог</NuxtLink>
          <NuxtLink>Реклама</NuxtLink>
          <NuxtLink>Помощь</NuxtLink>
        </div>
        <div class="text-sm opacity-50">
          <p class="mb-0.5">
            Вито -&nbsp;<NuxtLink class="underline" :to="ROUTES_NAMES.main"
              >сервис по проверенным объявлениям</NuxtLink
            >.&nbsp;ООО "Я не ИП" 2025-сейчас
          </p>
          <p class="mb-0.5">
            <NuxtLink class="underline" to="#"
              >Политика конфиденциальности</NuxtLink
            >.&nbsp; Оплачиая услуги на сайте, вы принимаете&nbsp;<NuxtLink
              class="underline"
              to="#"
              >оферту</NuxtLink
            >.
          </p>
          <p>Благодарим вас зас за правильный выбор!</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ROUTES_NAMES } from "~/router/routes";
</script>
