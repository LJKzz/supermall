<template>
  <scroll class="tab-menu" ref="scroll">
    <div class="menu-list">
      <div
        class="menu-list-item"
        v-for="(item,index) in tabMenus"
        :key="index"
        :class="{'active':index === currentIndex}"
        @click="menuClick(index)"
        ref="menuItem"
      >{{item.title}}</div>
    </div>
  </scroll>
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
  mounted() {
    this.$nextTick(function() {
      this.$refs.scroll.refresh();
    });
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
  height: calc(100% - 49px);
  text-align: center;
  font-size: 15px;
  flex: none;
  overflow: hidden;
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
</style>