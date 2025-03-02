<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <!-- bg-green-500 bg-yellow-400 bg-red-500 bg-red-700 text-green-500 text-yellow-400 text-red-500 text-red-700 -->
</template>

<script lang="ts" setup>
const { accessToken, user, getUser } = await useAuth();
if (accessToken.value && !user.value) {
  await getUser();
}

</script>
