<template>
  <div class="error-page h-full">
    <div class="container text-center mx-auto max-w-fit">
      <IconError width="192" height="192" />
      <UiH1 class="title">Ошибка: 404</UiH1>
      <div class="mb-6">
        <div class="text-xl">Старница не найдена</div>
      </div>
      <NuxtLink :to="ROUTES_NAMES.main">
        <UiBtn>Вернуться на главную</UiBtn>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
if (process.server) {
  const event = useRequestEvent();
  if (event) setResponseStatus(event, 404);
}
</script>
