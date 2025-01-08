<template>
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
</template>

<script setup lang="ts">
import { ROUTES_NAMES } from "~/router/routes";
</script>
