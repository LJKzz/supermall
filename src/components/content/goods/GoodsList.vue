<template>
  <div class="goods-list">
    <goods-list-item  v-for="(item,index) in goods" :key="index" :goodsItem="item" />
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
.goods-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.goods-list-item{
  width: 48%;
  padding: 2px;
}
</style>