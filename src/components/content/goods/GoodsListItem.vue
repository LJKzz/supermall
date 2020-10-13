<template>
  <div class="goods-list-item" @click="toDetail(goodsItem.iid)">
    <img @load="imageLoad" :src="goodsItem.show.img" alt />
    <h5>{{goodsItem.title}}</h5>
    <span class="price">
      <span>￥</span>
      <span class="big-price">{{price[0]}}</span>
      <span class="small-price">.{{price[1]}}</span>
    </span>
    <span class="cfav">{{goodsItem.cfav}}人收藏</span>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  data() {
    return {
      price: 0
    };
  },
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {
    this.getPrice();
  },
  methods: {
    getPrice() {
      this.price = this.goodsItem.price.split(".");
    },
    imageLoad() {
      this.$bus.$emit("itemImageLoad");
    },
    toDetail(id) {
      this.$router.push("/detail?q=" + id);
    }
  }
};
</script>

<style>
.goods-list-item img {
  display: block;
  width: 100%;
  /* border-radius: 10px; */
}
.goods-list-item a {
  font-size: 0px;
}
.goods-list-item h5 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 5px 0;
  padding: 0 5px;
}
.goods-list-item > span {
  padding: 0 5px;
}
.goods-list-item .price {
  font-size: 0px;
  color: #ff6700;
}
.goods-list-item .price span {
  font-size: 12px;
}
.goods-list-item .price .big-price {
  font-size: 18px;
}
.goods-list-item .cfav {
  font-size: 13px;
  margin-left: 10px;
}
</style>