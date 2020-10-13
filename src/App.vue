<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view />
    </keep-alive>

    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar.vue";
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
.tab-bar {
  bottom: -1px;
  z-index: 999;
}
</style>