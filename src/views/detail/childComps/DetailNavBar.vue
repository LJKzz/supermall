<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="left" @click="backClick">
        <img src="~assets/img/detail/left.png" alt />
      </div>
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item,index) in title"
          :key="index"
          :class="{active:index===currentIndex}"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", this.currentIndex);
    },
    backClick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.detail-nav-bar {
  background-color: #fff;
  position: relative;
  z-index: 99;
}
.detail-nav-bar .title {
  display: flex;
  font-size: 14px;
}
.detail-nav-bar .title .title-item {
  flex: 1;
}
.detail-nav-bar .title .active {
  color: var(--color-hight-text);
}
.detail-nav-bar .left img {
  width: 20px;
  height: 20px;
  margin: 12px 0 0 5px;
}
</style>