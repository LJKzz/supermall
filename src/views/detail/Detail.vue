<template>
  <div class="detail">
    <detail-nav-bar />
    <detail-swiper :top-images="topImages" />
    <detail-base-info :goods="goodsInfo" />
    <detail-shop-info :shop="shop" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";

import { getDetail, GoodsInfo, Shop } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo
  },
  data() {
    return {
      id: null,
      topImages: [],
      goodsInfo: {},
      shop: {}
    };
  },
  created() {
    this.id = this.$route.query.q;
    getDetail(this.id).then(res => {
      console.log(res);
      const data = res.result;
      this.topImages = res.result.itemInfo.topImages;
      this.goodsInfo = new GoodsInfo(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
    });
  }
};
</script>

<style>
.detail {
  padding: 0 0 50px 0;
}
</style>