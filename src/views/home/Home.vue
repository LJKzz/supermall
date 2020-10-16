<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      ref="tabControl2"
      :title="title"
      @tabControlClick="tabClick"
      class="tab-control-hide"
      v-show="isTabFixed"
    />
    <scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="scrollPosition"
      @pullingUp="loadMore"
    >
      <home-swiper class="home-swiper" :banner="banner" @swiperImgLoad="swiperImgLoad" />
      <home-recommend class="home-recommend" :recommend="recommend" />
      <home-feature />
      <tab-control ref="tabControl" :title="title" @tabControlClick="tabClick" />
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
import { debounce } from "common/utils";
import { backTopMixin } from "common/mixin";

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
  mixins: [backTopMixin],

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
      isBackTop: false,
      isTabFixed: false,
      tabOffsetTop: 0,
      saveY: 0,
      refresh: null
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
  },
  computed: {
    //计算属性
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  mounted() {
    //初始化页面，进行dom
    this.refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$nextTick(() => {
      this.$bus.$on("homeItemImageLoad", () => {
        this.refresh();
      });
    });
  },
  activated() {
    this.$refs.scroll.refresh();
    this.$refs.scroll.scrollTo(0, this.saveY, 0);

    console.log(this.saveY);
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScroll();
  },
  methods: {
    // 方法
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
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    scrollPosition(position) {
      this.isBackTop = -position.y >= 750;
      this.isTabFixed = -position.y >= this.tabOffsetTop - 44;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
    },
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
      this.refresh();
    }
  }
};
</script>

<style>
#home {
  padding: 0 0 50px;
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  font-weight: 900;
  color: #fff;
}
.home-swiper {
  font-size: 0px;
}
.home-recommend {
  background-color: #fff;
}
.tab-control-hide {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 9;
}

.scroll {
  height: 100%;
  overflow: hidden;
}
.goods-list {
  background-color: #d9d2d4;
}
</style>