<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="scrollPosition"
      @pullingUp="loadMore"
    >
      <home-swiper class="home-swiper" :banner="banner" />
      <home-recommend class="home-recommend" :recommend="recommend" />
      <home-feature />
      <tab-control class="tab-control" :title="title" @tabControlClick="tabClick" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-if="isBackTop" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeature from "./childComps/HomeFeature";

import { getHomeMultidata, getHomeGoodsdata } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    BackTop
  },
  data() {
    return {
      banner: [],
      recommend: [],
      title: ["流行", "新款", "精选"],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: "pop",
      isBackTop: false
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list;
    });
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    this.$bus.$on("itemImageLoad", () => {
      this.$refs.scroll.refresh();
    });
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoodsdata(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
      });
    },
    tabClick(index) {
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
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    scrollPosition(position) {
      this.isBackTop = position.y <= -750;
    },
    loadMore() {
      console.log("11");
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
    }
  }
};
</script>

<style>
#home {
  padding: 44px 0 50px;
  height: 100vh;
}
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
  font-size: 0px;
}
.home-recommend {
  background-color: #fff;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
.scroll {
  height: 100%;
}
</style>