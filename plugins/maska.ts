export default defineNuxtPlugin(async (nuxtApp) => {
  const { vMaska } = await import("maska");

  nuxtApp.vueApp.directive("maska", vMaska);
});
