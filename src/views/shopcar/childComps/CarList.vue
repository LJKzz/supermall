<template>
  <div class="car-list">
    <scroll class="scroll" ref="scroll">
      <car-list-item v-for="(item,index) in carList" :key="index" :itemInfo="item" />
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CarListItem from "./CarListItem";

import { mapGetters } from "vuex";
export default {
  name: "CarList",
  components: {
    Scroll,
    CarListItem
  },
  computed: {
    ...mapGetters(["carList"])
  },
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>

<style>
.car-list {
  height: calc(100% - 44px - 49px);
  background: #bbb;
}
.car-list .scroll {
  height: 100%;
}
</style>