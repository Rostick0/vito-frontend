<template>
  <div class="container mx-auto" v-if="product">
    <div class="mb-12">
      <ReviewCard :product="product" />
    </div>
    <div class="flex gap-y-6 gap-x-10">
      <div class="">
        <ReviewMarks class="mb-5" :reviewMarks="reviewMarks ?? []" />
        <NuxtLink
          :to="
            ROUTES_NAMES.productMutationReview(
              convertNamePath(product?.name),
              product?.id
            )
          "
        >
          <UiBtn>Оставить отзыв</UiBtn>
        </NuxtLink>
      </div>
      <div class="grow">
        <LazyReviewList v-if="reviews?.length" :reviews="reviews" />
        <LazyUiNotFound v-else />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

const { data: product, get: getProduct } = await useApi<IProduct>({
  apiName: "products",
  apiMethod: "get",
  requestParams: {
    id: route.params?.id?.toString(),
  },
  params: {
    expand: convertToExpand(["mainImage", "reviewsCount"]),
  },
});

const { data: reviews, get: getReviews } = await useApi<IReview[]>({
  apiName: "reviews",
  apiMethod: "getAll",
  params: {
    expand: "user",
  },
});

const { data: reviewMarks, get: getReviewMarks } = await useApi<IReviewMarks[]>(
  {
    apiName: "reviews",
    apiMethod: "getMarks",
    params: {
      reviewtable_type: "app\\models\\Product",
    },
    requestParams: {
      id: route.params?.id?.toString(),
    },
  }
);

await Promise.all([getProduct(), getReviews(), getReviewMarks()]);

if (!product.value) navigateTo("/404", {});

// const groupBy = groupByInArray(
//   product.value?.productProperties ?? [],
//   "property.propertyType.name"
// );
</script>
