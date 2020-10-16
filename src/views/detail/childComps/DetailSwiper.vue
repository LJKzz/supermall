<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in topImages" :key="index">
      <img @load="imgLoad" :src="item" alt />
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from "components/common/swiper/Swiper.vue";
import SwiperItem from "components/common/swiper/SwiperItem.vue";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit("swiperImgLoad");
    }
  }
};
</script>

<style>
.detail-swiper {
  height: 300px;
  overflow: hidden;
}
.detail-swiper img {
  width: 100%;
}
</style>