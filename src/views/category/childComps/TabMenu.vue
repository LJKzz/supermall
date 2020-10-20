<template>
  <div class="tab-menu">
    <scroll class="menu-scroll">
      <div class="menu-list">
        <div
          class="menu-list-item"
          v-for="(item,index) in tabMenus"
          :key="index"
          :class="{'active':index === currentIndex}"
          @click="menuClick(index)"
        >{{item.title}}</div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

export default {
  name: "TabMenu",
  props: {
    tabMenus: {
      type: Array,
      default: []
    }
  },
  components: {
    Scroll
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    menuClick(index) {
      this.currentIndex = index;
      this.$emit("menuClick", index);
    }
  }
};
</script>

<style>
.tab-menu {
  width: 100px;
  text-align: center;
  font-size: 15px;
  flex: none;
}
.tab-menu .menu-list .menu-list-item {
  height: 45px;
  line-height: 45px;
  letter-spacing: 1px;
}
.tab-menu .menu-list .active {
  font-weight: bold;
  border-left: 3px solid #c97575;
}
.menu-scroll {
  height: calc(100% - 49px);
  flex: 1;
  overflow: hidden;
}
</style>