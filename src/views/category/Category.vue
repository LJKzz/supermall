<template>
  <div class="category">
    <nav-bar>
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="category-content">
      <tab-menu :tabMenus="tabMenus" @menuClick="menuClick" />
      <scroll class="category-scroll" ref="scroll">
        <tab-menu-sort :sorts="showSorts" />
        <tab-control :title="['流行','最新','精选']" @cateTabControlClick="tabControlClick" />
        <goods-list :goods="showGoods" />
      </scroll>
    </div>
  </div>
</template>

<script>
import TabMenu from "./childComps/TabMenu";
import TabMenuSort from "./childComps/TabMenuSort";
import TabMenuDetail from "./childComps/TabMenuDetail";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import {
  getCategory,
  getSubCategory,
  getCategoryDetail
} from "network/category";
import { debounce } from "common/utils";
import { backTopMixin } from "common/mixin";

export default {
  name: "Category.vue",
  components: {
    NavBar,
    TabMenu,
    TabMenuSort,
    Scroll,
    TabMenuDetail,
    TabControl,
    GoodsList
  },
  data() {
    return {
      tabMenus: [],
      categoryData: {},
      currentIndex: 0,
      currentType: "pop",
      refresh: null
    };
  },
  computed: {
    showSorts() {
      if (Object.keys(this.categoryData).length == 0) return [];
      return Array.from(this.categoryData[this.currentIndex].subcategories);
    },
    showGoods() {
      if (Object.keys(this.categoryData).length == 0) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    }
  },
  created() {
    this.getTabMenu();
  },
  mounted() {
    //初始化页面，进行dom
    this.refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$nextTick(() => {
      this.$bus.$on("cateItemImageLoad", () => {
        this.refresh();
      });
    });
  },
  methods: {
    getTabMenu() {
      getCategory().then(res => {
        this.tabMenus = res.data.category.list;
        // 构建分类数据结构
        for (let i = 0; i < this.tabMenus.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: []
            }
          };
        }
        this.getSubCategories(0);
      });
    },
    getSubCategories(index) {
      this.currentIndex = index;
      const maitKey = this.tabMenus[index].maitKey;
      getSubCategory(maitKey).then(res => {
        this.categoryData[index].subcategories = res.data.list;
        this.categoryData = { ...this.categoryData };

        this.getCategoryDetails("pop");
        this.getCategoryDetails("new");
        this.getCategoryDetails("sell");
      });
    },
    getCategoryDetails(type) {
      const miniWallkey = this.tabMenus[this.currentIndex].miniWallkey;
      getCategoryDetail(miniWallkey, type).then(res => {
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },
    menuClick(index) {
      this.currentIndex = index;
      this.getSubCategories(this.currentIndex);
      this.$refs.scroll.scrollTo(0, 0);
    },
    tabControlClick(index) {
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
    }
  }
};
</script>

<style>
.category {
  height: 100vh;
  padding-bottom: 49px;
}
.category .nav-bar {
  background-color: var(--color-tint);

  color: #fff;
  font-weight: bold;
  letter-spacing: 2px;
}
.category-content {
  display: flex;
  height: 100%;
}
.category-scroll {
  height: calc(100% - 49px);
  flex: 1;
  overflow: hidden;
}
</style>