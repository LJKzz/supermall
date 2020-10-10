<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png" alt />
      <div slot="item-info">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/category-active.png" alt />
      <div slot="item-info">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcar">
      <img slot="item-icon" src="~assets/img/tabbar/shopcar.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcar-active.png" alt />
      <div slot="item-info">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/personal">
      <img slot="item-icon" src="~assets/img/tabbar/personal.png" alt />
      <img slot="item-icon-active" src="~assets/img/tabbar/personal-active.png" alt />
      <div slot="item-info">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>