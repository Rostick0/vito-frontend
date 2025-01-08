<template>
  <header class="bg-white sticky top-0 shadow-md z-20">
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
    <div class="container flex mx-auto py-3">
      <NuxtLink class="flex shrink-0 mr-5" :to="ROUTES_NAMES.main">
        <Logo />
      </NuxtLink>
      <UiBtn class="items-center gap-x-2 mr-2">
        <IconList class="fill-white" />
        <span>Каталог</span>
      </UiBtn>
      <Search class="mr-8" />
      <NuxtLink
        class="flex gap-x-2 items-center self-center font-semibold whitespace-nowrap"
        to="#"
      >
        <IconWindowAdd />
        <span>Разместить объявление</span>
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ROUTES_NAMES } from "~/router/routes";
</script>
