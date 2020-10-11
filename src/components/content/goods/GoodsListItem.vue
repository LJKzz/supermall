<template>
  <div class="goods-list-item">
    <a :href="goodsItem.link">
      <img :src="goodsItem.show.img" alt="" />
    </a>
    <h4>{{goodsItem.title}}</h4>
    <span class="price">{{goodsItem.price}}</span>
    <span class="cfav">{{goodsItem.cfav}}</span>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.goods-list-item a img{
  width: 100%;
}
.goods-list-item a {
  font-size: 0px;
}
</style>