<template>
  <div class="detail">
    <detail-nav-bar @titleClick="titleClick" ref="nav" />
    <scroll class="scroll" ref="scroll" :probe-type="3" @scroll="scrollPosition">
      <detail-swiper :top-images="topImages" @swiperImgLoad="swiperImgLoad" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @goodsImageLoad="goodsImageLoad" />
      <detail-goods-param ref="param" :goods-param="goodsParam" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="recommend" />
    </scroll>
    <back-top @click.native="backClick" v-if="isBackTop" />
    <detail-bottom @openCar="openCar" />
    <detail-add-car v-if="isCar" :carInfo="carInfo" @closeCar="closeCar" @addToCar="addToCar" />
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
import DetailBottom from "./childComps/DetailBottom";
import DetailAddCar from "./childComps/DetailAddCar";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";

import { debounce } from "common/utils";
import { backTopMixin } from "common/mixin";

import {
  getDetail,
  Goods,
  Shop,
  Comment,
  getRecommend,
  Car
} from "network/detail";
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
    DetailBottom,
    DetailAddCar,
    Scroll,
    GoodsList
  },
  mixins: [backTopMixin],
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      goodsParam: {},
      commentInfo: {},
      recommend: [],
      refresh: null,
      getTops: null,
      detailTops: [],
      currentIndex: 0,
      carInfo: {},
      isCar: false
    };
  },
  created() {
    this.id = this.$route.query.q;
    getDetail(this.id).then(res => {
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
      this.carInfo = new Car(data.itemInfo, data.skuInfo);
    });
    getRecommend().then(res => {
      this.recommend = res.data.list;
    });
  },
  mounted() {
    //初始化页面，进行dom
    this.refresh = debounce(this.$refs.scroll.refresh, 50);
    this.getTops = debounce(() => {
      this.detailTops = [];
      this.detailTops.push(0);
      this.detailTops.push(this.$refs.param.$el.offsetTop - 45);
      this.detailTops.push(this.$refs.comment.$el.offsetTop - 45);
      this.detailTops.push(this.$refs.recommend.$el.offsetTop - 45);
      this.detailTops.push(Number.MAX_VALUE);
    }, 50);
    this.$nextTick(() => {
      this.$bus.$on("detailItemImageLoad", () => {
        this.refresh();
      });
    });
  },
  methods: {
    goodsImageLoad() {
      this.refresh();
      this.getTops();
    },
    swiperImgLoad() {
      this.refresh();
      this.getTops();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.detailTops[index], 500);
    },
    scrollPosition(position) {
      const positionY = -position.y;
      for (let i = 0; i < this.detailTops.length; i++)
        if (
          this.currentIndex !== i &&
          positionY >= this.detailTops[i] &&
          positionY < this.detailTops[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }

      this.isBackTop = -position.y >= 750;
    },
    openCar() {
      this.isCar = true;
    },
    addToCar(addList) {
      console.log(addList);
      // 购物车信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.price = this.goods.realPrice;
      product.shopName = this.shop.name;
      product.shopLogo = this.shop.logo;
      product.id = this.id;
      product.num = addList.count;
      product.color = addList.color;
      product.size = addList.size;
      product.check = false;
      this.$store.dispatch("addCart", product).then(res => {
        this.$toast.show(res, 2000);
        console.log(this.$toast);
        
      });
      this.closeCar();
    },
    closeCar() {
      this.isCar = false;
    }
  }
};
</script>

<style>
.detail {
  padding: 0 0 50px 0;
  background-color: #bbb;
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