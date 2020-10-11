<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper class="home-swiper" :banner="banner" />
    <home-recommend :recommend="recommend" />
    <home-feature />
    <tab-control
      class="tab-control"
      :title="title"
      @tabControlClick="tabClick"
    />
    <goods-list :goods="showGoods" />
    <ul>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
    </ul>
    <ul>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
    </ul>
    <ul>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
      <li>li</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeature from "./childComps/HomeFeature";

import { getHomeMultidata, getHomeGoodsdata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
  },
  data() {
    return {
      banner: [],
      recommend: [],
      title: ["流行", "新款", "精选"],
      goods: {
        pop: {
          page: 1,
          list: [],
        },
        new: {
          page: 1,
          list: [],
        },
        sell: {
          page: 1,
          list: [],
        },
      },
      currentType: "pop",
    };
  },
  created() {
    getHomeMultidata().then((res) => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    getHomeGoods(type) {
      const page = this.goods[type].page;
      getHomeGoodsdata(type, page).then((res) => {
        this.goods[type].list = res.data.list;
      });
    },
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  font-weight: 900;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.home-swiper {
  margin-top: 44px;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>