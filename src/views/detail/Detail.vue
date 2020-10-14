<template>
  <div class="detail">
    <detail-nav-bar />
    <scroll class="scroll" ref="scroll" :probe-type="3">
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @goodsImageLoad="goodsImageLoad" />
      <detail-goods-param :goods-param="goodsParam" />
      <detail-comment-info :comment-info="commentInfo" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailGoodsParam from "./childComps/DetailGoodsParam";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shop, Comment } from "network/detail";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,

    DetailGoodsInfo,
    DetailGoodsParam,
    DetailCommentInfo,
    Scroll
  },
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {}
    };
  },
  created() {
    this.id = this.$route.query.q;
    getDetail(this.id).then(res => {
      console.log(res);
      const data = res.result;
      // 轮播图
      this.topImages = res.result.itemInfo.topImages;
      // 商品信息
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 店铺对象
      this.shop = new Shop(data.shopInfo);
      // 商品详情
      this.detailInfo = data.detailInfo;
      // 商品参数
      this.goodsParam = data.itemParams;
      // 商品评论
      if (data.rate.cRate !== 0) {
        this.commentInfo = new Comment(data.rate).comment;
      }
    });
  },
  methods: {
    goodsImageLoad() {
      this.$refs.scroll.refresh();
    }
  }
};
</script>

<style>
.detail {
  padding: 0 0 50px 0;
  background-color: #ddd;
  position: relative;
  z-index: 10;
  height: 100vh;
}
.detail .scroll {
  height: calc(100% - 44px);
}
.detail-base-info,
.detail-shop-info,
.detail-comment-info {
  padding: 1px 10px;
  background-color: #fff;
  border-radius: 10px;
  margin: 10px;
}
</style>