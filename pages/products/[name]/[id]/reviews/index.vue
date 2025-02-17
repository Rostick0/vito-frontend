<template>
  <div class="container mx-auto" v-if="product">
    <div class="">
      <ReviewCard :product="product" />
    </div>
    <div class="">
      <ReviewList :reviews="reviews" />
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
    expand: convertToExpand(["mainImage"]),
  },
});

const { data: reviews, get: getReviews } = await useApi<IReview[]>({
  apiName: "reviews",
  apiMethod: "getAll",
  params: {
    expand: "user",
  },
});

await Promise.all([getProduct(), getReviews()]);

if (!product.value) navigateTo("/404", {});

// const groupBy = groupByInArray(
//   product.value?.productProperties ?? [],
//   "property.propertyType.name"
// );
</script>
