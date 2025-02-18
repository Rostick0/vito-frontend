export default defineNuxtPlugin(async (nuxtApp) => {
  await import("moment/dist/locale/ru");
});
