export default defineNuxtPlugin(async (nuxtApp) => {
  const [
    { configure, defineRule },
    { required, email, min, max, confirmed, size, image, min_value, max_value },
    { localize },
  ] = await Promise.all([
    import("vee-validate"),
    import("@vee-validate/rules"),
    import("@vee-validate/i18n"),
  ]);

  defineRule("required", required);
  defineRule("email", email);
  defineRule("min", min);
  defineRule("max", max);
  defineRule("confirmed", confirmed);
  defineRule("size", size);
  defineRule("image", image);
  defineRule("min_value", min_value);
  defineRule("max_value", max_value);

  configure({
    generateMessage: localize("ru", {
      messages: {
        required: "Поле обязательное к заполнению",
        email: "Введён некорректный email",
        between: "The {field} value must be between 0:{min}, 1:{max}",
        min: "Поле должно содержать минимум 0:{min} символов",
        max: "Поле должно содержать максимум 0:{max} символов",
        confirmed: "Поля не совпадают",
        size: "The {field} size must be less than {size} KB",
        image: "Файл должен быть изображением",
        min_value: "Минимальное значение 0:{min}",
        max_value: "Максимальное щначение 0:{max_value}",
      },
    }),
  });
});
