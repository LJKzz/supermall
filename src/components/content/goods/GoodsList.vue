<template>
  <div class="goods-list">
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.goods-list-item {
  width: 47%;
  padding: 0 0px 10px;
  margin: 7px 0;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
}
</style>