<template>
  <div class="">
    <div class="mb-3">
      <div class="font-bold text-xl mb-1">{{ user?.name }}</div>
      <div class="text-sm">
        <div class="flex flex-wrap items-center">
          <span class="inline-flex items-center">
            {{ user?.raiting }}
            <IconStar
              class="inline fill-yellow-400"
              width="20"
              height="20"
            /> </span
          >&nbsp;количество отзывов
          {{ user?.reviews_count }}
        </div>
        <div class="">{{ USER_TYPE?.[user?.type] }}</div>
        <div class="">
          Регистрация - {{ moment(user.created_at).fromNow() }}
        </div>
      </div>
    </div>
    <UiBtn class="justify-center w-full">Написать</UiBtn>
  </div>
</template>

<script lang="ts" setup>
import moment from "moment";

interface IProps {
  user: IUser;
}

const props = defineProps<IProps>();
</script>
