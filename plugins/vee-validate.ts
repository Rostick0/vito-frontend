export default defineNuxtPlugin(async (nuxtApp) => {
  const { configure, defineRule } = await import("vee-validate");
  const {
    required,
    email,
    min,
    max,
    confirmed,
    size,
    image,
    min_value,
    max_value,
  } = await import("@vee-validate/rules");
  const { localize } = await import("@vee-validate/i18n");

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
    // create and set a localization handler
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
