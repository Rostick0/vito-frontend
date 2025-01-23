<template>
  <div class="yandex-map min-h-64 w-full" ref="map"></div>
</template>

<script lang="ts" setup>
import ymaps from "ymaps";

// declare var ymaps: {
//   load: () => Promise<Function>;
// };

interface IProps {
  cords?: number[];
  zoom?: number;
  controls?: Array<string | number | never>;
  functionInit?: Function;
}

const { functionInit, ...props } = withDefaults(defineProps<IProps>(), {
  cords: [55.746846, 37.62085],
  zoom: 11.25,
  controls: [],
});

const map = ref(null);

onMounted(() => {
  ymaps.load().then((maps: any) => {
    const myMap = new maps.Map(map.value, {
      center: props.cords,
      ...props,
      // controls: ["geolocationControl"],
    });

    if (functionInit) {
      functionInit(maps, myMap);
      return;
    }

    const myPlacemark = new maps.Placemark(myMap.getCenter());

    myMap.geoObjects.add(myPlacemark);
  });
});

// await ymaps.then(res => res.)
</script>

<style lang="scss" scoped>
.yandex-map {
  //   min-height: 400px;
  //   min-height: 125px;
}
</style>
